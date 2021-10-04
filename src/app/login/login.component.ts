import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ClientUser } from './clientUser';
import { AuthService } from '../auth.service';

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
  loginSuccess: String;
  loginError: boolean;
  errors: string[];

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  onSubmit() {

    this.authService.doLogin(this.name, this.password).subscribe( response =>{
      console.log(response);

      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token', access_token)
      this.router.navigate(['/home']);
    },errorResponse =>{
      this.errors =['Usuários/Senhas incorretos!']
    } 
    )
  }

  newRegister() {
   
   const user: ClientUser = new ClientUser();
   user.username = this.name;
   user.password = this.password;

   this.authService.save(user)
        .subscribe(response =>{
            this.loginSuccess ="Cadastro realizado com sucesso, realize o login."
            this.register = false;
            this.name ='';
            this.password='';
            this.loginError =false;
   }, error => {
     this.loginError = true;
     this.loginSuccess = '';
   })
   
      console.log(this.name, this.password);
  }

  cancelRegister() {
    this.register = false;
  }

  toRegister(event:any) {
    event.preventDefault();
    this.register = true;
  }


}
