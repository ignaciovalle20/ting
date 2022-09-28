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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginPageBtnComponent,
    LoginPageInputComponent,
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
