import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo/todo.service'
import { ITodoItem } from './../../services/todo/todoItem'

@Component({
	selector: 'todoListDisplay',
	template: require('./todoListDisplay.component.html'),
	providers: [TodoService]
})

export class TodoListDisplayComponent implements OnInit {
	todoItems: ITodoItem[]
	constructor(private _todoService: TodoService) { }

	ngOnInit() {
		this._todoService.getTodoList()
			.subscribe(
			todoItems => this.todoItems = todoItems,
			error => console.log(error)
			);
	}
}