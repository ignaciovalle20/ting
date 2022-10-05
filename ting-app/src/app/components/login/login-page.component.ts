import { Component, OnInit, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { LoginPageInputComponent } from './login-page-input/login-page-input.component';
import { USERS } from '../../mock-users';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  username: string | undefined;
  password: string | undefined;

  wrongUser: boolean = false;
  constructor(private loginService: LoginService , private route: Router) { }

  ngOnInit(): void {
  }
  @ViewChild('userinput') userinput!: any;
  @ViewChild('passinput') passinput!: any;

  // @ViewChild(LoginPageInputComponent) userinput!: LoginPageInputComponent;
  // @ViewChild(LoginPageInputComponent) passinput!: LoginPageInputComponent;
  login() {
    this.username = this.userinput.input;
    this.password = this.passinput.input;
    if (this.username && this.password) {
      console.log(this.loginService.getUser(this.username, this.password))
      if (this.loginService.getUser(this.username, this.password)) {
        console.log("Login correcto");
        this.wrongUser = false;
        this.route.navigate(['/movies']);
      } else {
        console.log("Login incorrecto");
        this.wrongUser = true;
      }
    }
  }
}

