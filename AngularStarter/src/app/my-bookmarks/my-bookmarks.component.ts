import { BookmarksService } from './../core/services/bookmarks.service';
import { Component, OnInit } from '@angular/core';
import { BookmarkReturn } from '../core/models/bookmark';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bookmarks',
  templateUrl: './my-bookmarks.component.html',
  styleUrls: ['./my-bookmarks.component.scss']
})
export class MyBookmarksComponent implements OnInit {

  mybookmarks: BookmarkReturn[]=[];

  constructor(
    private bookmarkService: BookmarksService,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    this.getMyBookmarks();
  }

  getMyBookmarks(){
    this.bookmarkService.getUserBookmarks().subscribe(response => {
      console.log(response);
      this.mybookmarks = response;
    }, error => {
      console.log(error);
    })
  }

}
