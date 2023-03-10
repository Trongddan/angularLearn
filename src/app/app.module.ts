import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CategoryComponent } from './body/components/category/category.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './body/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { DialogModule } from 'primeng/dialog';
import { ProductComponent } from './body/components/product/product.component';
import {DropdownModule} from 'primeng/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CarouselModule} from 'primeng/carousel';
import { SliderComponentsComponent } from './components/slider-components/slider-components.component';
import { GroupProductComponent } from './components/group-product/group-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CategoryComponent,
    HomeComponent,
    ProductComponent,
    SliderComponentsComponent,
    GroupProductComponent,

  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    AngularToastifyModule,
    DialogModule,
    DropdownModule,
    CarouselModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
