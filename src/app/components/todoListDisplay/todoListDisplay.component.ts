import { Component, OnInit } from '@angular/core';
import { TodoService, ITodoItem } from './../../services/todo'


@Component({
	selector: 'todoListDisplay',
	template: require('./todoListDisplay.component.html'),
	providers: [TodoService]
})

export class TodoListDisplayComponent implements OnInit {
	todoItems: ITodoItem[]

	constructor(private _todoService: TodoService) { }

	ngOnInit() {
		this.getAllTodoItems();
	}

	getAllTodoItems() {
		this._todoService.getTodoList()
			.subscribe(
			todoItems => this.todoItems = todoItems,
			error => console.log(error)
			);
	}

	addNewTodoItem(item: ITodoItem): void {
		this.todoItems.push(item);
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
		this._todoService.deleteTodoItem(currentTodoItem).subscribe(null, null, () => this.getAllTodoItems());
	}
}