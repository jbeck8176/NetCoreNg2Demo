import { Component } from '@angular/core';
import { TodoService } from './../../services/todo/todo.service';
import { TodoStore } from './../../services/todo/todo.store';
import { ITodoItem } from './../../services/todo/todoItem';


@Component({
	selector: 'todoItemAdd',
	template: require('./todoItemAdd.component.html')
})

export class TodoItemAddComponent {
	private addItem = <ITodoItem>{};

	constructor(private _todoService: TodoService, private _todoStore: TodoStore) { }

	addTodoItem(event) {
		event.preventDefault();
		var todoFromService: ITodoItem = Object.assign({}, this.addItem);
		console.log('click happened');
		this._todoStore.addTodoItem(todoFromService);
	}
}