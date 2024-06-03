import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { LoginRoutingModule } from '../login/login-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';



@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    AppConfigModule,
    RippleModule,MessageModule,MessagesModule
],
declarations: [RegisterComponent],
providers: [MessageService] // Add MessageService to providers array
})
export class RegisterModule { }
