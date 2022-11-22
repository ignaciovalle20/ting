import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-page-input',
  templateUrl: './login-page-input.component.html',
  styleUrls: ['./login-page-input.component.scss']
})
export class LoginPageInputComponent implements OnInit {

  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;
  input: string | undefined;

  constructor() { }

  ngOnInit(): void {}
}
