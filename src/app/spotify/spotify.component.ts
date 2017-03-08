import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  searchBox: FormControl = new FormControl();
  results: Observable<any>;
  albums: Observable<any>;
  selectedArtist = '';
  constructor(private spotify: SpotifyService) { }
 
  ngOnInit() {
      this.searchBox
          .valueChanges
          .distinctUntilChanged()
          .debounceTime(600)
          .subscribe((event) => this.runSearch(event));
  }
  private runSearch(schterm): void {
      this.results = this.spotify.doSearch(schterm);
      this.albums = null;
      this.selectedArtist ='';
  }
  getAlbums(event: Event, artistid: string, artistname: string): void {
      event.preventDefault();
      this.albums = null;
      this.selectedArtist = artistname;
      this.albums=this.spotify.getArtistAlbums(artistid);
  }
}
