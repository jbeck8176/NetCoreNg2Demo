import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { ITodoItem } from './todoItem';

@Injectable()
export class TodoService {
	private todoApiBaseUrl = "http://localhost:5000/api/todo";

	private _httpHeaders = new Headers({ 'Content-Type': 'application/json' });
	private _httpReqOptions = new RequestOptions({ headers: this._httpHeaders });

	constructor(private _http: Http, private sanitization: DomSanitizer) { }

	getTodoList(): Observable<ITodoItem[]> {
		return this._http.get(this.todoApiBaseUrl)
			.map((response: Response) => <ITodoItem[]>response.json());
	}

	addTodoItem(todoItem: ITodoItem): Observable<ITodoItem> {
		this.sanitization.bypassSecurityTrustUrl(this.todoApiBaseUrl);
		let body = JSON.stringify(todoItem);
		return this._http.post(this.todoApiBaseUrl, body, this._httpReqOptions)
			.map((response: Response) => <ITodoItem>response.json());
	}

	updateTodoItem(todoItem: ITodoItem): void {
		let putUrl = this.todoApiBaseUrl + "/" + todoItem.key;
		this.sanitization.bypassSecurityTrustUrl(putUrl);
		let body = JSON.stringify(todoItem);
		this._http.put(putUrl, body, this._httpReqOptions).subscribe();
	}

	deleteTodoItem(todoItem: ITodoItem): Observable<Response> {
		console.log('in the service');
		let deleteUrl = this.todoApiBaseUrl + "/" + todoItem.key;
		this.sanitization.bypassSecurityTrustUrl(deleteUrl);
		let body = JSON.stringify(todoItem);
		return this._http.delete(deleteUrl, this._httpReqOptions)
	}

}