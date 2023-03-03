import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { router } from '../config/appRouter';
@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  constructor(private http: HttpClient) {}
  addCate(name: string, description: string) {
    const body = { name, description };
    return this.http.post(router.addCategory, body) as Observable<any>;
  }
  getCate() {
    return this.http.get(router.getCategory);
  }
  deleteCate(id: string) {
    return this.http.delete(router.deleteCategory + id) as Observable<any>;
    // console.log(router.deleteCategory + id);
  }
}
