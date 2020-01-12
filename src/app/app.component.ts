import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTab = 'recipe';
  switchTab(tab: string) {
    this.currentTab = tab;
  }
}
