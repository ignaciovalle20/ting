import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login-page.component';
import { MovieFinderComponent } from './components/movie-finder/movie-finder.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SeatsComponent } from './components/seats/seats.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'movies', component: MovieFinderComponent},
  { path: 'seats', component: SeatsComponent},
  { path: 'movielist', component: MovieListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
