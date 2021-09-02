import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name: string;
  email: string;
  password: string;
  register: boolean;
  loginSuccess: string;
  loginError: boolean;

  constructor(private router: Router) { }

  onSubmit() {
    console.log(this.email, this.password);
  }

  newRegister() {
    console.log(this.name,this.email, this.password);
  }

  cancelRegister() {
    this.register = false;
  }

  toRegister(event:any) {
    event.preventDefault();
    this.register = true;
  }

}
