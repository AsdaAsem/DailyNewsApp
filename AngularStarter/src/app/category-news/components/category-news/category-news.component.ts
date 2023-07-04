import { News } from './../../../core/models/news';
import { NewsApiService } from './../../../core/services/news-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsResult } from 'src/app/core/models/news';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.scss']
})
export class CategoryNewsComponent implements OnInit {

  newsResult: NewsResult;
  newses: News[] = [];
  category: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsApiService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category);
    this.getNewsByCategory();
  }


  //getnewsByCategory
  getNewsByCategory(){
    this.newsService.getNewsByCategory(this.category, 0).subscribe(response => {
      console.log(response);
      this.newsResult = response;
      this.newses = response.results;
    })
  }

  //loadmore..
  loadMore(){
    this.newsService.getNewsByCategory(this.category, this.newsResult.nextPage).subscribe(response => {
      console.log(response);
      this.newsResult = response;
      this.newses = [...this.newses, ...response.results];
    })
  }

}
