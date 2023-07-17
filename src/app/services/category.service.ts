import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url + 'admin/categories', category);
  }
}
