import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public peliculas:any[];
  public cartelera:any[];
  public urlImage:string = "http://image.tmdb.org/t/p/w300";
  constructor(private peliculasService:PeliculasService) { }

  ngOnInit() {
    this.getCartelera();
    this.getPopulares();
  }

  getPopulares(){
    this.peliculasService.getPopulares().subscribe(
      response =>{
        this.peliculas = response.results;
        console.log(this.peliculas);
      },error=>{
        console.log(error);
      }
    )
  }

  getCartelera(){
    this.peliculasService.getCartelera().subscribe(
          response =>{
            this.cartelera = response.results;
            console.log("cartelera");
            console.log(this.cartelera);
          },error=>{
            console.log(error);
          }
        )
  }

}
