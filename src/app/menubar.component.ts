import { Component } from '@angular/core';

@Component({
	selector: 'sidebar',
	templateUrl: './templates/menu.component.html',
	styleUrls: ['./css/menu.component.css']
})

export class MenuBar {
	pressed: boolean = false;
	titles: string[];
	links: string[];
	workflows:boolean = false;
	constructor() {
		this.titles = ["Dashboard","Reports","Documents", "Work Flows"];
		this.links = ["/dashboard","/reports","/documents","/work-flows"];

	}

	openOpt() {
		console.log('Open works');
		this.workflows = !this.workflows;
	}
	closeNav() {
		// this.sidenav = false;
		// console.log('Sidenav --> ',this.sidenav);
		this.pressed = false;
	}
	public handleClick() {
		console.log('Receives data!');
	}


}