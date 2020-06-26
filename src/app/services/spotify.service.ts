import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class SpotifyService {

  token:string;

  constructor(private http:HttpClient) {
  
   }

  async otra(){ 
    let tokenasyn = await this.getTokenAsyn();

    return tokenasyn.access_token; 
   }

    getQuery(query: string, prueba?){

      let token = ""; 
      if (prueba) {
         token = prueba; 
      }else {
         token = this.getToken();
      }

 

    console.log("el token generado es: ",token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    console.log(headers);
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url,{headers})

   }

   getToken(){
   const headers = new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded'
    });
    
    let body = `client_id=0a7e097439284671a4798edfc696c5da&client_secret=5a8947da16af42418e68da797ae494df&grant_type=client_credentials`;
    this.http.post('https://accounts.spotify.com/api/token',body,{headers})
    .subscribe((response:any)=>{
      this.token = response.access_token;
     console.log("este es el token "+response.access_token);
    });

    return this.token;
    }

    async getTokenAsyn(): Promise<any> {

 

      const headers = new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded'
        });
        
        let body = `client_id=0a7e097439284671a4798edfc696c5da&client_secret=5a8947da16af42418e68da797ae494df&grant_type=client_credentials`;
        const response = await this.http.post('https://accounts.spotify.com/api/token',body,{headers}).toPromise();

        return response; 


    
     
      
    }
   getNewRelease(token){  
    return this.getQuery('browse/new-releases', token).pipe( map ( data => data['albums'].items ));
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
