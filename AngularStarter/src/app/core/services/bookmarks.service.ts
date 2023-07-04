import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  BookmarkReturn } from '../models/bookmark';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  baseUrl = environment.apiUrl + 'bookmarks';

  constructor(
    private http: HttpClient
  ) { }


  addBookmark(bookmark: News){
    return this.http.post(`${this.baseUrl}`, bookmark);
  }

  getUserBookmarks(){
    return this.http.get<BookmarkReturn[]>(`${this.baseUrl}`);
  }

  removeBookMarks(bookmarkId: number){
    return this.http.delete(`${this.baseUrl}/${bookmarkId}`);
  }

}
