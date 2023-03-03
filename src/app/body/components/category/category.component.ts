import { Component, NgModule } from '@angular/core';

import { ToastService } from 'angular-toastify';
import { CategoryServiceService } from 'src/app/services/category-service.service';
interface cateObj {
  _id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  listCate: any = [];
  description: string = '';
  name: string = '';
  isUpdate: boolean = false;
  idIsUpdated: string = '';
  constructor(
    private cateService: CategoryServiceService,
    private toast: ToastService
  ) {}
  addInfoToast(mess: string, type: string) {
    switch (type) {
      case 'success':
        this.toast.success(mess);
        break;
      case 'error':
        this.toast.error(mess);
        break;
      default:
        this.toast.error('Có lỗi không mong muốn xảy ra');
    }
  }
  getCategory() {
    this.cateService.getCate().subscribe((res) => (this.listCate = res));
  }
  addNewCategory() {
    this.cateService.addCate(this.name, this.description).subscribe(
      () => {
        this.getCategory();
        this.addInfoToast('Thêm mới thành công', 'success');
        this.name = '';
        this.description = '';
      },
      (err) => {
        this.addInfoToast('Thêm thất bại', 'error');
      }
    );
  }
  deleteCate(id: string) {
    this.cateService.deleteCate(id).subscribe(
      (res) => {
        console.log(res);
        this.getCategory();
        this.display = false;
        this.addInfoToast('Xóa thành công', 'success');
      },
      (err) => console.log(err)
    );
  }
  ngOnInit() {
    this.getCategory();
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  handleUpdateCate(item: cateObj) {
    this.idIsUpdated = item._id;
    this.isUpdate = true;
    this.name = item.name;
    this.description = item.description;
  }
}
