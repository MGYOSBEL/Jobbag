import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private dataService: DataService, private router: Router) {

   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form data submitted', this.categoryForm.value);
    this.dataService.addCategory(this.categoryForm.value).subscribe(
      () => this.router.navigate(['/categories'])
    );

  }

}
