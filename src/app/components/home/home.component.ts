import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { BPClient } from 'blocking-proxy';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  loading:boolean = true;
  nuevasCanciones:any[] =[];
  error:boolean = false;
  errorMsj:string;

  constructor(private servicio:SpotifyService) { 

    this.servicio.getNewRelease().subscribe( (data:any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      this.errorMsj = errorService.error.error.message; 
      console.log(errorService.error.error.message
      )
    }
  );

  }

  ngOnInit() {
    
  this.servicio.getToken();
 }

}
