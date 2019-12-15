import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './data/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverURL = 'http://localhost';
  apiURL = '/api';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.serverURL + this.apiURL + '/categories');
  }
}
