import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaComponent  } from './components/pelicula/pelicula.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda/:texto', component: BusquedaComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
