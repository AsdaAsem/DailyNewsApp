import { News, NewsResult } from './../../../core/models/news';
import { NewsApiService } from './../../../core/services/news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsResult: NewsResult;
  newses: News[] = [];

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit(): void {
    // this.getNews();
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

  loadMore(){
    console.log("loading more news");
    this.newsApiService.getNews(this.newsResult.nextPage).subscribe(response => {
      console.log(response);
      this.newsResult = response;
      this.newses = [...this.newses, ...response.results];
    });
  }

}
