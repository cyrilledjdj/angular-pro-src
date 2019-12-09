import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';

@Component({
	selector: 'songs-favourites',
	templateUrl: './songs-favourites.component.html',
	styleUrls: [ './songs-favourites.component.scss' ]
})
export class SongsFavouritesComponent implements OnInit {
	constructor(private store: Store) {}

	ngOnInit() {}
}
