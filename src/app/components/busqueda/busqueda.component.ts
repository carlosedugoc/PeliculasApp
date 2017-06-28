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
  public peliculas = [];
  constructor(private peliculaService:PeliculasService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getPelicula();
  }

  getPelicula(){
    this.activatedRoute.params.subscribe(params => {
      this.peliculaService.buscarPelicula(params['texto']).subscribe(peliculas =>{
        this.peliculas = peliculas;
        console.log(peliculas);
      });
    })

  }
}
