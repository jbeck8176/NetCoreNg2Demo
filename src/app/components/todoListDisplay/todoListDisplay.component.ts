import { Component, OnInit } from '@angular/core';
import { ITodoItem } from './../../services/todo/todoItem';
import { TodoStore } from './../../services/todo/todo.store';
import { TodoService } from './../../services/todo/todo.service';


@Component({
	selector: 'todoListDisplay',
	template: require('./todoListDisplay.component.html')
})

export class TodoListDisplayComponent implements OnInit {
	todoItems: ITodoItem[]

	constructor(private _todoService: TodoService, private _todoStore: TodoStore) { }

	ngOnInit() {
		this.getAllTodoItems();
	}

	getAllTodoItems() {
		this._todoStore.getTodoList().subscribe(
			todoItems => { this.todoItems = todoItems; console.log(todoItems); });
		// this._todoStore.getTodoList()
		// 	.subscribe(
		// 	todoItems => this.todoItems = todoItems,
		// 	error => console.log(error)
		// 	);
	}

	todoItemCompletedChanged(itemKey: string): void {
		let currentTodoItem = this.todoItems.filter(itm => itm.key == itemKey)[0];
		//since angular is stupid...
		currentTodoItem.isComplete = !currentTodoItem.isComplete;
		this._todoService.updateTodoItem(currentTodoItem);
	}

	deleteTodoItem(itemKey: string, event): void {
		event.preventDefault();
		let currentTodoItem = this.todoItems.filter(itm => itm.key == itemKey)[0];
		this._todoStore.deleteTodoItem(currentTodoItem);
	}
}