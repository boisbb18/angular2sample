import { Component } from '@angular/core';

@Component({
	selector: 'make',
	template: `
	<div class="center-text"> Make Page is working now</div>
	<br />
	<br />
	<div class="center-text"> 
  	<div  (click)="getData()">Primary</div>
	</div>
	`,
	 styleUrls: ['./app.component.css']

})

export class Make {
	getData() {
		console.log('It is working now');
	}
}