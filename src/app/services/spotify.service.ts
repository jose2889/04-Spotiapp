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
      'Authorization': 'Bearer BQD5-VoLDC0Uix7qWquoLE98PBFghFCf6N7YmgLaCTHDXJad4AamV-bjnq803YTbIWUm_F2YSMZ5GT4WqLM'
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
