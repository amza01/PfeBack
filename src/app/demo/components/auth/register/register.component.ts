import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';

import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-register',

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  rememberMe: boolean = true;
 email:string='';
 password:string='';
 firstName:string='';
 lastName:string='';
 confirmPassword:string='';
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
 this.msgs=[];
          this.msgs = [{ severity: 'success', summary: 'success', detail: " success" }];
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
}
signUp(){
  if(this.email && this.password && this.firstName && this.lastName&&this.password&&this.confirmPassword)
    {
      
      if(this.password!=this.confirmPassword)
        {
          this.msgs=[];
          this.msgs = [{ severity: 'error', summary: 'error', detail: "password and confirm password should be the same" }];
      }
      else{
        let signUpData={
          email:this.email,
          password:this.password,
          firstName:this.firstName,
          lastName:this.lastName
        }
        this.authService.signUp(signUpData).subscribe(res=>{
          console.log(res);
          this.msgs=[];
          this.msgs = [{ severity: 'success', summary: 'success', detail: " success" }];
          this.router.navigate(['/'])
          
        },
        error => {
          console.log(this.email);
          console.error('Signup error', error.error.error);
          // Gérer l'erreur ici
          this.msgs=[];
                    this.msgs = [{ severity: 'error', summary: 'error', detail: " something was wrong" }];
        }
      
      )
        
      }
    }
    else
    {
      this.msgs=[];
      this.msgs = [{ severity: 'error', summary: 'error', detail: "please fill all the fields" }];
    }

}
}

