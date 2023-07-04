import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { News } from 'src/app/core/models/news';
import { BookmarksService } from 'src/app/core/services/bookmarks.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() news: News;

  defaultImage = '/assets/images/inner/inner_1.jpg';

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

}
