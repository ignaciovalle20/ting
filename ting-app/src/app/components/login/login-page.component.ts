import { Component, OnInit, ViewChild } from '@angular/core';
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
  msgerror: string | undefined;
  userloged: boolean = false;
  constructor(private loginService: LoginService, private route: Router) { }

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
      console.log(this.loginService.login(this.username, this.password))
      this.loginService.login(this.username, this.password)
        .subscribe({
          next: res => {
            this.wrongUser = false;
            this.userloged = true;
            this.route.navigate(['/moviefinder']);
          }, error: err => {
            this.wrongUser = true;
            this.msgerror = "Usuario o contraseña incorrectos";
          }
        });
    }
    else{
      this.wrongUser = true;
      this.msgerror = "Debe ingresar ambos campos";
    }
  }

}

