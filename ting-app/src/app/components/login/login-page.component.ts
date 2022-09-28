import { Component, OnInit, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { LoginPageInputComponent } from './login-page-input/login-page-input.component';
import { USERS } from '../../mock-users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  username: string | undefined;
  password: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('userinput') userinput!: any;
  @ViewChild('passinput') passinput!: any;

 // @ViewChild(LoginPageInputComponent) userinput!: LoginPageInputComponent;
 // @ViewChild(LoginPageInputComponent) passinput!: LoginPageInputComponent;
  login() {
    this.username = this.userinput.input;
    this.password = this.passinput.input;
    console.log("USER", this.username);
    console.log("PASS", this.password);
  }
}
