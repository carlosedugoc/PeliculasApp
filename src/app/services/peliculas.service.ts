import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey:string = "2746717c75a07fa53681f78494647afa";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private urlDetalle:string ="https://api.themoviedb.org/3/movie/343611?api_key={api_key}"

  constructor( private jsonp:Jsonp ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&page=2&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }`;
    

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  console.log(url);
    return this.jsonp.get( url )
                .map( res=> res.json());
  }
  

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
console.log(url)
    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

    getDetalle( id:string ){

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
