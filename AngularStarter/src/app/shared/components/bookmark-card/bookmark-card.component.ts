import { ToastrService } from 'ngx-toastr';
import { BookmarksService } from './../../../core/services/bookmarks.service';
import { Component, Input, OnInit } from '@angular/core';
import { BookmarkReturn } from 'src/app/core/models/bookmark';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.scss']
})
export class BookmarkCardComponent implements OnInit {
  @Input() news: BookmarkReturn;

  defaultImage = '/assets/images/news/news_2.jpg';

  constructor(
    private bookmarkService: BookmarksService,
    private toastService: ToastrService,

  ) { 

  }

  ngOnInit(): void {
  }

  removeBookmark(){
    this.bookmarkService.removeBookMarks(this.news.id).subscribe(response => {
      console.log(response);
      this.toastService.success("Bookmark Removed");
      window.location.reload();
    }, error => {
      console.log(error);
      this.toastService.error("Bookmark Remove Failed");
    })
  }

}
