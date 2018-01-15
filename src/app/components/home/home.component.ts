import { Component, OnInit } from '@angular/core';
import { PostModel } from 'app/post.model';
import { PostService } from 'app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: PostModel[] = [];

  constructor(private router: Router, private postSVC: PostService) { }

  ngOnInit() {
    // for (let i = 0; i < 30; i++){
    //   this.posts.push(new PostModel());
    //   this.posts[i].content = 'data:image/png;base64,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';
    //
    // }
    this.postSVC.getAll().toPromise().then((posts) => this.posts = posts);
  }

  public goToUpload(): void {
    this.router.navigate(['/upload']);
  }

}
