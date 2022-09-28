import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login/login-page.component';
import { LoginPageBtnComponent } from './components/login/login-page-btn/login-page-btn.component';
import { LoginPageInputComponent } from './components/login/login-page-input/login-page-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieFinderComponent } from './components/movie-finder/movie-finder.component';
import { MovieFinderMovieSelectorComponent } from './components/movie-finder/movie-finder-movie-selector/movie-finder-movie-selector.component';
import { MovieFinderTheaterSelectorComponent } from './components/movie-finder/movie-finder-theater-selector/movie-finder-theater-selector.component';
import { MovieFinderDateSelectorComponent } from './components/movie-finder/movie-finder-date-selector/movie-finder-date-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginPageBtnComponent,
    LoginPageInputComponent,
    NavbarComponent,
    MovieFinderComponent,
    MovieFinderMovieSelectorComponent,
    MovieFinderTheaterSelectorComponent,
    MovieFinderDateSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
