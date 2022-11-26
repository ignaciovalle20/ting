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
  isLoggedIn?: boolean;
  btnisDisabled?: boolean;
  btnPurchases?: string;

  constructor(private router: Router, private authService: AuthService) { }

  public isMenuCollapsed = true;
  ngOnInit(): void {
    this.getRoute();
  }

  //bi-person-circle
  getRoute() {
    if (this.router.url === "/home") {
      this.isNotLoginPage = true;
      this.isLoggedIn = false;
      this.btnLabel = "Iniciar Sesion";
      this.gotoPage = "login";
      this.biclass = "bi bi-person-circle";
    }
    else if (this.router.url === "/login") {
      this.isNotLoginPage = false;
      this.isLoggedIn = false;
      this.btnisDisabled = true;
    }
    else{
      this.isLoggedIn = true;
      this.isNotLoginPage = true;
      this.btnLabel = "Salir";
      this.gotoPage = "home";
      this.btnPurchases = "Mis compras";
      this.biclass = "bi bi-box-arrow-right";
    }
    console.log("LOGEDIN", this.isLoggedIn);

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
  goToPurchases(){
    this.router.navigate(["/purchases"]);
  }
}


