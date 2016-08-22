import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.components.html',
    styleUrls: ['./app/app.components.css']
})
export class AppComponent {
	title: string;
	todos: string[];
	constructor() {
		this.title = 'Angular 2Do';
		this.todos = [];
	}

	addTodo(input: HTMLInputElement) {
		console.log (input.value);
		this.todos.push(input.value);
		input.value = '';
	}
}
