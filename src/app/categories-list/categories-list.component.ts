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

  categories: Observable<Category[]>;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.categories = this.dataService.getAllCategories();
    //   categories => this.categories = categories
    // );
    console.log("yujuuuuu, me cargueeeeee");
  }

}
