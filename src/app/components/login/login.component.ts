import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(user, pass) {
    if (user !== "" && pass !== "" && user && pass) {
      return true;
    }
    else {
      return false;
    }
  }

}
