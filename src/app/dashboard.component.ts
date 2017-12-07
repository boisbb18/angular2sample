import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'dashboard',
	templateUrl: './templates/dashboard.component.html',
	styleUrls: ['./css/dashboard.component.css']

})

export class Dashboard {
	tiles = [
    {text: 'One', cols: 2, rows: 1, color: 'white'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  ];
	constructor(private http: Http) {
		console.log("It's coming here");
	}	

	 handleClick() {
		console.log('Receives data!');
		this.http.get( 'https://jsonplaceholder.typicode.com/posts/1')
			.subscribe((response) => {
				let obj = JSON.parse((<any>response)._body);
				console.log('Response --> ',obj);
			})
	}


}