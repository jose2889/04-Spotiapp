import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas:any[] =[];
  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(valor:string){
    console.log(valor);
    this.spotify.buscarArtista(valor).subscribe((data:any )=>{
      console.log(data);
      this.artistas = data;
    })
  }
}
