import { Component, OnInit } from '@angular/core';
import { Post } from './posts/post.model';
import { PostService } from './posts/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService],
})
export class AppComponent implements OnInit {
  title = 'blog-post-app';
  // show = 'add-post';
  show = 'all-posts';
  // show = 'edit-post';

  postToBeEdited!: Post;

  // edit post
  constructor(private postService: PostService) {}

  setShow(page: string) {
    this.show = page;
  }

  ngOnInit(): void {
    this.postService.editPostClicked.subscribe((post) => {
      this.show = 'edit-post';
      this.postToBeEdited = post;
    });
  }
}
