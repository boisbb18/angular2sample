import { Component, ViewChild } from '@angular/core';
//import {SharedService} from './shared.service';
@Component({
	selector: 'sidebar',
	templateUrl: './templates/menu.component.html',
	styleUrls: ['./css/menu.component.css']
})

export class MenuBar {
	@ViewChild('sidenav') nav;
	pressed: boolean = false;
	titles: string[];
	links: string[];
	workflows:boolean = false;
    constructor() {
     // this.ss = ss;
    }

    openSideNav() {
    	this.nav.opened = true;
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