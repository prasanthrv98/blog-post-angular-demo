import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navBtnClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  navTo(page: string) {
    this.navBtnClicked.emit(page);
  }
}
