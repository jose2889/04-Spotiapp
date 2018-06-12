import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("listo el servicio");
   }

   getQuery(query: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA7dOTpjsqse3ivnbd-fbb-y0C4Pc6mdZ8bVHmsX05oBy8jvoznZnA30Z3bXtpvlZpEZGo8PnkrSRCDGVI'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url,{headers})

   }

   getNewRelease(){  
    return this.getQuery('browse/new-releases').pipe( map ( data => data['albums'].items ));
   }

   buscarArtistas(termino:string){

    let q =`search?q=${termino}&type=artist&limit=15`;   
    return this.getQuery(q).pipe( map ( (data:any) => data.artists.items ));
   
   }
   getArtista(id:string){

    let q =`artists/${id}`;   
    return this.getQuery(q);
    // .pipe( map ( (data:any) => data.artists.items ));
   
   }

   getTopTracks(id:string){

    let q =`artists/${id}/top-tracks?country=us`;   
    return this.getQuery(q)
    .pipe( map ( (data:any) => data.tracks ));
   
   }
}
