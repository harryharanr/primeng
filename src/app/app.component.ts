import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [{
    header: 'header 1',
    content: 'content 1'
  },
  {
    header: 'header 2',
    content: 'content 2'
  },
  {
    header: 'header 3',
    content: 'content 3'
  }]

  addNewTab() {
    this.items.push({
      header: 'header 4',
      content: 'content 4'
    });
  }
}
