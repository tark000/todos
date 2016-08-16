import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.components.html',
    styleUrls: ['./app/app.components.css']
})
export class AppComponent {
	title: string;

	constructor() {
		this.title = 'Angular 2Do';
	}
}
