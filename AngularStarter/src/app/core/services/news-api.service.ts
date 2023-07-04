import { NewsResult } from './../models/news';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private country = 'us';
  private language = 'en';
  //api key one
  // private apiKey = 'pub_1377b47a458d777d5abd344653eb6652b784';
    //pub_1800f6f4cb7ec75a7f5e7b707efaad79bd8b
    // pub_17875386e5de386c1ccbb56a1e09d1ac5c23
  // api key two
  private apiKey = 'pub_1377b47a458d777d5abd344653eb6652b784';
  private baseUrl = `https://newsdata.io/api/1/news?apikey=${this.apiKey}&country=${this.country}&language=${this.language}`;

  constructor(private http: HttpClient) { }

  // getNews(){
  //   return this.http.get<NewsResult>(`${this.baseUrl}`);
  // }

  
  getNews(page: number){
    return this.http.get<NewsResult>(`${this.baseUrl}&page=${page}`);
  }

  getTopNews(){
    return this.http.get<NewsResult>(`${this.baseUrl}&category=top`);
  }

  getNewsByCategory(category: string, page: number){
    return this.http.get<NewsResult>(`${this.baseUrl}&category=${category}&page=${page}`);
  }


  searchNews(search: string){
    return this.http.get<NewsResult>(`${this.baseUrl}&q=${search}`);
  }

}
