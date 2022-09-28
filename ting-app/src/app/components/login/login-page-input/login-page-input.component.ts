import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-page-input',
  templateUrl: './login-page-input.component.html',
  styleUrls: ['./login-page-input.component.scss']
})
export class LoginPageInputComponent implements OnInit {

  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;
  name: string | undefined;
  input: string | undefined;
  @Output() UserTxtEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

 /*  sendUser() {
    this.UserTxtEvent.emit(this.user);
  } */
}
