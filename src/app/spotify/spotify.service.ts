import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  constructor(private http: Http) { }

  doSearch(artist): Observable<any> {
      if (artist.length > 0)
          return this.http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist')
              .map(response => response.json().artists.items);
      else
          return Observable.of(null);
  }	

  getArtistAlbums(artist): Observable<any> {
      if (artist.length > 0)
          return this.http.get('https://api.spotify.com/v1/artists/' + artist + '/albums?album_type=album').map(resp => resp.json().items);
      return Observable.of(null);
  }
}
