import { Component } from '@angular/core';

import { TodoListDisplayComponent } from './components/todoListDisplay';
import { TodoItemAddComponent } from './components/todoItemAdd';
import { ITodoItem } from './services/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo';

  // @ViewChild(TodoListDisplayComponent)
  // private todoListDisplayComp: TodoListDisplayComponent;

  // itemAddedHandler(newTodoItem: ITodoItem) {
  //   console.log('we got a net item in the main components.');
  //   console.log(newTodoItem);
  //   this.todoListDisplayComp.addNewTodoItem(newTodoItem);
  // }
}
