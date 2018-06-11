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
      'Authorization': 'Bearer BQDU-Oxu38tnQfWORjaYiLzkWZmQ8xYzUaPt0rHqb9p3RI0qdnSYFCydsJP8wa6ABp8GFMFLf_0Rc6XGq7Q'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url,{headers})

   }

   getNewRelease(){  
    return this.getQuery('browse/new-releases').pipe( map ( data => data['albums'].items ));
   }

   buscarArtista(termino:string){

    let q =`search?q=${termino}&type=artist&limit=15`;   
    return this.getQuery(q).pipe( map ( (data:any) => data.artists.items ));
   
   }
}
