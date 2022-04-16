import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: [
    './edit-post.component.css',
    '../add-post/add-post.component.css',
  ],
})
export class EditPostComponent implements OnInit {
  @ViewChild('title', { static: true }) title!: ElementRef;
  @ViewChild('content', { static: true }) content!: ElementRef;
  @ViewChild('author', { static: true }) author!: ElementRef;

  @Input() editPost!: Post;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.title.nativeElement.value = this.editPost.title;
    this.content.nativeElement.value = this.editPost.content;
    this.author.nativeElement.value = this.editPost.author;
    console.log(this.editPost);
  }

  onEdit(
    title: HTMLInputElement,
    content: HTMLTextAreaElement,
    author: HTMLInputElement,
    event: Event
  ) {
    event.preventDefault();
    this.postService.editPost(
      this.editPost.id,
      title.value,
      content.value,
      author.value
    );
  }
}
