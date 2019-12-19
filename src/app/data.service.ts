import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from './data/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverURL = 'http://localhost';
  apiURL = '/api';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.serverURL + this.apiURL + '/categories');
  }


  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      this.serverURL + this.apiURL + '/category', {
        "name":category.name,
        "description": category.description
      }, this.httpOptions
    );
  }
}
