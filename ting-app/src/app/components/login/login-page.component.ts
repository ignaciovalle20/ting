import { Component, OnInit, ViewChild} from '@angular/core';
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
  userloged: boolean = false;
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
        this.userloged = true;
        this.route.navigate(['/home']);
      } else {
        console.log("Login incorrecto");
        this.wrongUser = true;
      }
    }
  }

}

