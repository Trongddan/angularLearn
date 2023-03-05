import { Component} from '@angular/core';
import {
  faMagnifyingGlass,
  faBagShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  imgLogoUrl = 'assets/logo.png';
  serchIcon = faMagnifyingGlass;
  bagIcon = faBagShopping;
  UserIcon = faUser;


}

