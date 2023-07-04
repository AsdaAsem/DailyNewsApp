import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsResult, News } from '../core/models/news';
import { NewsApiService } from '../core/services/news-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('search', { static: false }) searchTerm: ElementRef;
  newsResult: NewsResult;
  newses: News[] = [];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit(): void {

  }

  onSearch() {
    var search = this.searchTerm.nativeElement.value;
    this.getNews(search);
  }

  //get news...
  getNews(search: string) {
    console.log('loading search news');
    this.newsApiService.searchNews(search).subscribe((response) => {
      console.log(response);
      this.newsResult = response;
      this.newses = response.results;
    });
  }

  

}
