import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CategoryComponent } from './body/components/category/category.component';
import { HomeComponent } from './body/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [{ path: '', component: HomeComponent },{ path: 'category', component: CategoryComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
