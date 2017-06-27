import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "app/services/peliculas.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {
  public pelicula:any = {};
  public urlImage:string = "http://image.tmdb.org/t/p/w300/"
  constructor(private activatedRoute:ActivatedRoute,
              private peliculasService:PeliculasService) {

    this.activatedRoute.params.subscribe(params =>{
      this.pelicula = this.peliculasService.getDetalle(params['id'])
                      .subscribe(pelicula =>{
                        this.pelicula = pelicula;
                        console.log(this.pelicula);
                      });
    })

               }

  ngOnInit() {

  }

}
