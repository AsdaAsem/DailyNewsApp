import { Component, OnInit } from '@angular/core';
import { NewsResult, News } from 'src/app/core/models/news';
import { NewsApiService } from 'src/app/core/services/news-api.service';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.scss']
})
export class CategoryNewsComponent implements OnInit {

  newsResult: NewsResult;
  newses: News[] = [];
  
  constructor(
    private newsApiService: NewsApiService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

   //get news...
   getNews(){
    console.log("loading news");
    this.newsApiService.getNews(0).subscribe(response => {
      console.log(response);
      this.newsResult = response;
      this.newses = response.results;
    });
    
  }
  
  

}
