import { Component, OnInit } from '@angular/core';
import {Category} from '../data/category';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[];

  constructor(private dataService: DataService) {
     this.dataService.getAllCategories().subscribe (
       categories => this.categories = categories
     );
  }

  ngOnInit() {
  }

}
