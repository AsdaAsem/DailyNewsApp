import { Component, OnInit } from '@angular/core';
import { News, NewsResult } from 'src/app/core/models/news';
import { NewsApiService } from 'src/app/core/services/news-api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
})
export class EntertainmentComponent implements OnInit {
  newsResult: NewsResult;
  newses: News[] = [];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.getEntertainmentNews();
  }

  //getnewsByCategory
  getEntertainmentNews() {
    console.log('Getting Entertainment News');

    this.newsApiService
      .getNewsByCategory('entertainment', 0)
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
