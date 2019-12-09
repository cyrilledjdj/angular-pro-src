import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';

@Component({
	selector: 'songs-listened',
	templateUrl: './songs-listened.component.html',
	styleUrls: [ './songs-listened.component.scss' ]
})
export class SongsListenedComponent implements OnInit {
	constructor(private store: Store) {}

	ngOnInit() {}
}
