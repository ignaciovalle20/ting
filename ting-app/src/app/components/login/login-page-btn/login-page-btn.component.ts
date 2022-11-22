import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-page-btn',
  templateUrl: './login-page-btn.component.html',
  styleUrls: ['./login-page-btn.component.scss']
})


export class LoginPageBtnComponent implements OnInit {

  @Output() LoginEvent = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {}

  loginevent(event: MouseEvent) {
    this.LoginEvent.emit(event);
  }
  
}
