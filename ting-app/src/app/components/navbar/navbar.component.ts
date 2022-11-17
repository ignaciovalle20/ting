import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isNotLoginPage?: boolean;

  btnLabel?: string;

  gotoPage?: string;
  biclass?: string;

  btnFunction?: string;
  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
    this.getRoute();
  }

  //bi-person-circle
  getRoute() {
    if (this.router.url === "/home") {
      this.isNotLoginPage = true;
      this.btnLabel = "Ingresar";
      this.gotoPage = "login";
      this.biclass = "bi bi-person-circle";
    }
    else if (this.router.url === "/login") {
      this.isNotLoginPage = false;
    }
    else{
      this.isNotLoginPage = true;
      this.btnLabel = "Salir";
      this.gotoPage = "home";
      this.biclass = "bi bi-box-arrow-right";
    }

  }

  goNextPage() {
    if (this.gotoPage === "login") {
      this.router.navigate([this.gotoPage]);
    }
    else if (this.gotoPage === "home") {
      this.authService.logout();
      this.router.navigate([this.gotoPage]);
    }
  }
}


