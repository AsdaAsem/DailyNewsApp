import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryNewsRoutingModule } from './category-news-routing.module';
import { CategoryNewsComponent } from './components/category-news/category-news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';


@NgModule({
  declarations: [
    CategoryNewsComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    CategoryNewsRoutingModule,
   
  ]
})
export class CategoryNewsModule { }
