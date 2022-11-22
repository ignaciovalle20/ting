import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {}

  @ViewChild('userinput') userinput!: any;
  @ViewChild('passinput') passinput!: any;

  login() {
    this.username = this.userinput.input;
    this.password = this.passinput.input;
    if (this.username && this.password) {
      console.log(this.authService.login(this.username, this.password))
      this.authService.login(this.username, this.password)
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

