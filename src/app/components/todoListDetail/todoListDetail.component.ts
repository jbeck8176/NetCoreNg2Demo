import { Component, OnInit, Input } from '@angular/core';

import { ITodoItem } from './../../services/todo/index'

@Component({
	selector: 'todoListDetail',
	template: require('./todoListDetail.component.html')
})

export class TodoListDetailComponent implements OnInit {
	@Input() details: ITodoItem;

	constructor() { }

	ngOnInit() { }
}