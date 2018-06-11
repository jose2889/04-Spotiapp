import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {
  
  @Input() data:any;
  @Input() home:boolean = false;
  
  
  constructor(private router:Router) { }

  ngOnInit() {
  
  }

  verArtista(item:any){

    let artistId;

    if (item.type === "artist"){
      artistId = item.id;
    }
    else{
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist',artistId]);

    console.log(artistId);
  }
}
