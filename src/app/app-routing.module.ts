import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import {CategoriesListComponent} from './categories-list/categories-list.component';

const routes: Routes = [
  {path:"", component: StoryComponent},
  {path:"categories", component: CategoriesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
