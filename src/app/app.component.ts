import { Component } from '@angular/core';

import { TodoListDisplayComponent } from './components/todoListDisplay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Todo';
}
