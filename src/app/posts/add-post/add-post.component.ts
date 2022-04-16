import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  public id: number = 10;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // this.id = 10;
  }

  onAddPost(
    title: HTMLInputElement,
    content: HTMLTextAreaElement,
    author: HTMLInputElement,
    event: Event
  ) {
    event.preventDefault();

    this.postService.addPost(
      new Post(this.id++, title.value, content.value, author.value)
    );

    // console.log(title.value, content.value, author.value);
  }
}
