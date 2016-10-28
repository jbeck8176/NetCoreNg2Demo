import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs/Rx';

import { ITodoItem, TodoService } from './index';

@Injectable()
export class TodoStore {
	private _todoListData: ITodoItem[];
	private _todoListReplaySubject: ReplaySubject<ITodoItem[]>;

	constructor(private todoService: TodoService) { }
	//constructor() { }

	getTodoList(): ReplaySubject<ITodoItem[]> {
		if (!this._todoListReplaySubject) {
			this._todoListReplaySubject = new ReplaySubject<ITodoItem[]>(1);

			this.todoService.getTodoList()
				.subscribe(itms => this._todoListData = itms,
				null,
				() => { this._todoListReplaySubject.next(this._todoListData); });
		}

		return this._todoListReplaySubject;
	}

	addTodoItem(item: ITodoItem): void {
		this.todoService.addTodoItem(item).subscribe(
			(item) => {
				this._todoListData.push(item);
				this._todoListReplaySubject.next(this._todoListData);
			}
		);
	}

	deleteTodoItem(item: ITodoItem): void {
		this._todoListData = this._todoListData.filter((itm) => { return itm.key != item.key });
		this._todoListReplaySubject.next(this._todoListData);
		this.todoService.deleteTodoItem(item).subscribe();

	}
}