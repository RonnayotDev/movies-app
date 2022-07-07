import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GesresComponent } from './pages/gesres/gesres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDedatilComponent } from './pages/movie-dedatil/movie-dedatil.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'movie-detail/:id',
    component:MovieDedatilComponent
  },
  {
    path:'genres',
    component:GesresComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
