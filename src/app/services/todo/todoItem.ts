export interface ITodoDetail {
	created: string,
	details: string
}

export interface ITodoItem {
	key: string,
	name: string,
	isComplete: boolean,
	todoDetail: ITodoDetail
}
