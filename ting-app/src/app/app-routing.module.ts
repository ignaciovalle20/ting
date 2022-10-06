import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtrasComponent } from './components/extras/extras.component';
import { LoginPageComponent } from './components/login/login-page.component';
import { MovieFinderComponent } from './components/movie-finder/movie-finder.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginPageComponent},
  {path: 'movies', component: MovieFinderComponent},
  {path: 'snacks', component: ExtrasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
