import { ToastrService } from 'ngx-toastr';
import { News } from './../../../core/models/news';
import { BookmarksService } from './../../../core/services/bookmarks.service';
import { AuthService } from './../../../auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // @Input() imageUrl: string;
  // @Input() title: string;
  // @Input() description: string;
  // @Input() source: string;
  // @Input() link: string;

  @Input() news: News;

  defaultImage = '/assets/images/news/news_2.jpg';

  constructor(
    private authService: AuthService,
    private bookmarkservice: BookmarksService,
    private toastService: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addBookmark(){
    if(!this.authService.loggedIn()){
      this.toastService.info("Please Login To Bookmark");
      this.router.navigateByUrl('auth/login');
      return;
    }
    console.log(this.news);
    this.bookmarkservice.addBookmark(this.news).subscribe(response => {
      console.log(response);
      this.toastService.success("Bookmarked!");
    }, error => {
      console.log(error);
      if (error?.status === 400){
        this.toastService.warning(error?.error);
        return;
      }
      this.toastService.error("Bookmark Failed");
    })
  }

  readMore(url: string) {
    window.open(url, '_blank');
  }
  

}
