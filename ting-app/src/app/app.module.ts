import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieFinderComponent } from './movie-finder/movie-finder.component';
import { MovieFinderMovieSelectorComponent } from './movie-finder-movie-selector/movie-finder-movie-selector.component';
import { MovieFinderTheaterSelectorComponent } from './movie-finder-theater-selector/movie-finder-theater-selector.component';
import { MovieFinderDateSelectorComponent } from './movie-finder-date-selector/movie-finder-date-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    MovieFinderComponent,
    MovieFinderMovieSelectorComponent,
    MovieFinderTheaterSelectorComponent,
    MovieFinderDateSelectorComponent,
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
