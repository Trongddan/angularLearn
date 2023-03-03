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
  deleteCate() {
    this.cateService.deleteCate(this.idIsUpdated).subscribe(
      (res) => {
        console.log(res);
        this.getCategory();
        this.display = false;
        this.addInfoToast('Xóa thành công', 'success');
      },
      (err) => console.log(err)
    );
    this.idIsUpdated=''
  }
  ngOnInit() {
    this.getCategory();
  }
  
  display: boolean = false;

  showDialog(id:string) {
    this.display = true;
    this.idIsUpdated=id
  }
  handleUpdateCate(item: cateObj) {
    this.idIsUpdated = item._id;
    this.isUpdate = true;
    this.name = item.name;
    this.description = item.description;
  }
  backFromUpdate() {
    this.isUpdate = false;
    this.idIsUpdated = '';
    (this.name = ''), (this.description = '');
  }
  handleDoUpdate(name: string, description: string) {
    this.cateService.updateCate(this.idIsUpdated, name, description).subscribe(
      (res) => {
        this.getCategory()
        this.addInfoToast('Cập nhật thành công', 'success');
      },
      (err) => console.log(err)
    );
  }
}
