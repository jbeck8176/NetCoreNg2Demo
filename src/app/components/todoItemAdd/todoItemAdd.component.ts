import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService, ITodoItem } from './../../services/todo'

@Component({
	selector: 'todoItemAdd',
	template: require('./todoItemAdd.component.html'),
	providers: [TodoService]
})

export class TodoItemAddComponent {
	private addItem = <ITodoItem>{};
	@Output() itemAdded = new EventEmitter<ITodoItem>();

	constructor(private _todoService: TodoService) { }

	addTodoItem(event) {
		event.preventDefault();
		var todoFromService: ITodoItem;


		this._todoService.addTodoItem(this.addItem).subscribe(
			todoItm => {
				todoFromService = todoItm;
			},
			error => console.log(error),
			() => { //call is completely done... clear the tb and do something with the data
				this.addItem = <ITodoItem>{};
				//console.log(todoFromService);
				this.itemAdded.emit(todoFromService);
			}
		);
	}
}