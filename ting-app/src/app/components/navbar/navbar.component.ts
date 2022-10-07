import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isHomePage?: boolean;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.getRoute();
  }

  getRoute() {
    if (this.router.url === "/home") {
      this.isHomePage = true;
    } else {
      this.isHomePage = false;
    }
  }

}


