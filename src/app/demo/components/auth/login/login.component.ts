import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    rememberMe: boolean = true;
   email:string='';
   password:string='';
   msgs:Message[]=[];
    constructor(private layoutService: LayoutService,private authService :AuthService ,private router:Router) {}

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }
    logIn() {
      // Example of HTTP request (adapt to your backend)
      this.authService.login(this.email, this.password)
        .subscribe(
          response => {
            console.log(response);
            if (response.message === 'Login superAdmin successful') {
              localStorage.setItem('x', '1');
            } else if (response.message === 'Login successful') {
              localStorage.setItem('x', '0');
            }
       
            this.router.navigate(['home']);
           
          },
          error => {
            console.log(this.email);
            console.error('Login error', error.error.error);
            // Handle the error here
            this.msgs = [{ severity: 'error', summary: 'Error', detail: error.error.error || "Email or password incorrect" }];
          }
        );
    }
    

}
