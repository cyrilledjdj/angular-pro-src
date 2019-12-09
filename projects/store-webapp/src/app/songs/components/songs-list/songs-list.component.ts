import { Component, Input, OnInit } from '@angular/core';

import { Song } from '../../services/songs.service';

@Component({
	selector: 'songs-list',
	templateUrl: './songs-list.component.html',
	styleUrls: [ './songs-list.component.scss' ]
})
export class SongsListComponent implements OnInit {
	@Input() list: Song[];
	constructor() {}

	ngOnInit() {}
}
