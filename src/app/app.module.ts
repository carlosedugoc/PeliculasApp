import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavComponent } from './components/nav/nav.component';

import { PeliculasService } from './services/peliculas.service';

import {APP_ROUTING} from './app.routes';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    NavComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
