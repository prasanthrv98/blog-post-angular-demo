import { Component, Input, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    // update post
    this.postService.postUpdated.subscribe((posts) => {
      this.posts = posts;
    });
  }

  onEdit(id: number) {
    this.postService.getPostToBeEdited(id);
  }

  onDelete(id: number) {
    this.postService.deletePost(id);
  }
}
