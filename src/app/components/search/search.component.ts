import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  loading:boolean = false;
  artistas:any[] =[];
  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(valor:string){
    console.log(valor);
    if ( valor.length === 0 ) {
      this.artistas = [];
      this.loading = false;
      return;
      }
    this.loading = true;
    this.spotify.buscarArtista(valor).subscribe((data:any )=>{
      console.log(data);
      this.artistas = data;
      this.loading = false;
    })
  }
}
