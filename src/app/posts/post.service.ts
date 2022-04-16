import { EventEmitter } from '@angular/core';
import { Post } from './post.model';

export class PostService {
  postUpdated = new EventEmitter<Post[]>();
  editPostClicked = new EventEmitter<Post>();

  private posts: Post[] = [
    new Post(1, 'test', 'some content', 'alice'),
    new Post(2, 'abc', 'some content about abc', 'mark'),
  ];

  getPosts() {
    return this.posts.slice();
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.postUpdated.emit(this.posts.slice());
  }

  getPostToBeEdited(id: number) {
    const postToBeEdited = this.posts.find((ele) => ele.id === id);
    this.editPostClicked.emit(postToBeEdited);
  }

  editPost(id: number, title: string, content: string, author: string) {
    this.posts.forEach((post) => {
      if (post.id === id) {
        post.author = author;
        post.content = content;
        post.title = title;
      }
    });

    this.postUpdated.emit(this.posts.slice());
  }

  deletePost(id: number) {
    const updatedPosts = this.posts.filter((ele) => ele.id != id);
    console.log(updatedPosts);

    this.posts = updatedPosts.slice();
    this.postUpdated.emit(this.posts.slice());
  }
}
