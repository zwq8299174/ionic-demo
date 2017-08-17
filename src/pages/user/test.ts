import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	`,
})
export class TestComponent implements OnInit {
	title = 'Tour of Heroes';
	constructor() {}
	ngOnInit(): void {

	}
}
