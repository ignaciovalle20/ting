import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtrasComponent } from './components/extras/extras.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginPageComponent } from './components/login/login-page.component';
import { MovieFinderComponent } from './components/movie-finder/movie-finder.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ProcessingPaymentComponent } from './components/processing-payment/processing-payment.component';
import { SeatsComponent } from './components/seats/seats.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'movies', component: MovieFinderComponent},
  { path: 'seats', component: SeatsComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'movielist', component: MovieListComponent},
  { path: 'snacks', component: ExtrasComponent},
  { path: 'processing', component: ProcessingPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
