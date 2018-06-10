import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("listo el servicio");
   }

   getNewRelease(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCjie4YRa0wlv3BFx6oXdQpnZtcpO1uAJGcaWnIjDWwKrCsKFl9ANhZfDrsAVyD_SnYOo4XRU9Y59lKdxc'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers }).subscribe( data => {
      console.log(data);
    });
   }
}
