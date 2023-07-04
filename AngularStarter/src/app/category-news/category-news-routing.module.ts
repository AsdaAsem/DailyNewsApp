import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryNewsComponent } from './components/category-news/category-news.component';

const routes: Routes = [
  {path: ':category', component: CategoryNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryNewsRoutingModule { }
