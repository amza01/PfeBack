import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    rememberMe: boolean = false;
   email:string='';
   password:string='';
   msgs:Message[]=[];
    constructor(private layoutService: LayoutService,private authService :AuthService ,private router:Router) {}

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }
    logIn(){

        
  // Exemple de requête HTTP (à adapter à ton backend)
  this.authService.login(this.email, this.password)
  .subscribe(
    response => {
      console.log(this.email);
   localStorage.setItem('token',this.email);
   this.router.navigate(['home']);
      // Gérer la réponse ici
    },
    error => {
      console.log(this.email);
      console.error('Login error', error.error.error);
      // Gérer l'erreur ici
      this.msgs=[];
                this.msgs = [{ severity: 'error', summary: 'error', detail: " email ou password incorrect" }];
    }
  );
}}
