import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() tab = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  switchTab(tab: string) {
    this.tab.emit(tab);
  }
}
