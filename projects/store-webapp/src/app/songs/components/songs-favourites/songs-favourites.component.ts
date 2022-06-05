import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { Store } from '../../../store';
import { SongsService, Song } from '../../services/songs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'songs-favourites',
  templateUrl: './songs-favourites.component.html',
  styleUrls: ['./songs-favourites.component.scss'],
})
export class SongsFavouritesComponent implements OnInit {
  favourites$: Observable<Song[]>;
  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.favourites$ = this.store.select<Song[]>('playlist').pipe(
      filter(Boolean),
      map((playlist: Song[]) => playlist.filter((track) => track.favourite))
    );
  }
  onToggle(data) {
    this.songsService.toggle(data);
  }
}
