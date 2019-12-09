import { Component, OnInit } from '@angular/core';
import { Store } from './store';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	title = 'store-webapp';
	todos$: Observable<any[]>;
	constructor(private store: Store) {
		this.store.set('todos', [ { id: 1, name: 'Eat dinner' }, { id: 2, name: 'Do washing' } ]);
	}
	ngOnInit() {
		this.todos$ = this.store.select('todos');
	}
}
