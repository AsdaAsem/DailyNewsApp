import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    InputComponent,
    BookmarkCardComponent,
    NewsItemComponent,
    FooterComponent,
    WidgetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    NavBarComponent,
    BsDropdownModule,
    CarouselModule,
    CardComponent,
    InputComponent,
    BookmarkCardComponent,
    NewsItemComponent,
    FooterComponent,
    WidgetComponent
  ],
  providers:[
    [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
  ]
})
export class SharedModule { }
