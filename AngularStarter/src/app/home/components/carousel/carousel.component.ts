import { News } from './../../../core/models/news';
import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NewsResult } from 'src/app/core/models/news';
import { NewsApiService } from 'src/app/core/services/news-api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  newsResult: NewsResult;
  mainOne: News;
  topThree: News[] = [];
  constructor(private newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.getTopNews();
  }

  getTopNews() {
    console.log('loading news');
    this.newsApiService.getTopNews().subscribe((response) => {
      console.log(response);
      this.newsResult = response;
      this.mainOne = response.results[0];
      for (let index = 1; index < 4; index++) {
        this.topThree.push(response.results[index]);
      }
    });
  }

  readMore(url: string) {
    window.open(url, '_blank');
  }
}
