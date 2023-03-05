import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-product',
  templateUrl: './group-product.component.html',
  styleUrls: ['./group-product.component.css']
})
export class GroupProductComponent {
  @Input() title:string
  constructor(){
    this.title=''
  }
imgUrl:string='assets/dongho.jpg'
}
