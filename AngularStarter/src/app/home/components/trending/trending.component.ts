import { Component, OnInit } from '@angular/core';
import { NewsResult, News } from 'src/app/core/models/news';
import { NewsApiService } from 'src/app/core/services/news-api.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  newsResult: NewsResult;
  newses: News[] = [];

  constructor(
    private newsApiService: NewsApiService
  ) { }

  ngOnInit(): void {
    this.getTrendingNews();
    
  }

   //getnewsByCategory
   getTrendingNews() {
    console.log('Getting Trending News');

    this.newsApiService
      .getNewsByCategory('sports', 0)
      .subscribe((response) => {
         console.log(response);
        this.newsResult = response;
        this.newses = response.results;
      });
  }

  readMore(url: string) {
    window.open(url, '_blank');
  }

}
