import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryNewsComponent } from './components/category-news/category-news.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { TrendingComponent } from './components/trending/trending.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CategoryNewsComponent,
    EntertainmentComponent,
    TrendingComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
