import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "app/services/peliculas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  public texto:string;
  constructor(private peliculaService:PeliculasService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  onclick(){
    this.getPelicula();
  }

  getPelicula(){
    this.peliculaService.buscarPelicula(this.texto).subscribe(peliculas =>{
      console.log(peliculas);
    });
  }

}
