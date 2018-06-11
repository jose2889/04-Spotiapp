import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("listo el servicio");
   }

   getNewRelease(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAw_dajeaAzCVVVUMnOIsGFj3Zw0SuoJpq1kWxb6Uv8woAD2LH0fcmfpmyfHCxmqWq4h8xYJMQR57USeEc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers }).pipe( map ( data => data['albums'].items ))

   }

   buscarArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAw_dajeaAzCVVVUMnOIsGFj3Zw0SuoJpq1kWxb6Uv8woAD2LH0fcmfpmyfHCxmqWq4h8xYJMQR57USeEc'
    });
   
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{ headers })
    .pipe( map ( (data:any) => data.artists.items ));
   }
}
