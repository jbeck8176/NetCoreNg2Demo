import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ITodoItem } from './todoItem';

@Injectable()
export class TodoService {
	private todoApiBaseUrl = "http://localhost:5000/api/todo";

	constructor(private _http: Http) { }

	getTodoList(): Observable<ITodoItem[]> {
		return this._http.get(this.todoApiBaseUrl)
			.map((response: Response) => <ITodoItem[]>response.json());
	}

}