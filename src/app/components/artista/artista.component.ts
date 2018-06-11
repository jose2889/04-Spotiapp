import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  loading:boolean;
  topTracks:any[];

  constructor(private ActivatedRoute:ActivatedRoute, private spotify:SpotifyService, private router:Router) {
    this.ActivatedRoute.params.subscribe( param => {
      console.log(param['id']);
      this.loading = true;
      this.getArtista(param['id']);
      this.getTopTracks(param['id']);
    });
   }

  ngOnInit() {
  }

  getArtista(id:string){
    this.spotify.getArtista(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });   
}

getTopTracks(id:string){
  this.spotify.getTopTracks(id)
    .subscribe( resp => {
      console.log(resp);
      this.topTracks = resp;
    });
}

regresar(){
  this.router.navigate(['/home']);  
}

}
