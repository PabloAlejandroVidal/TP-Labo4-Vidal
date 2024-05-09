import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { AuthData, authDataInit } from '../../../shared/interfaces/auth-data';
import { MessageService } from '../../../shared/services/message/message.service';
import { Route, Router } from '@angular/router';
import { MaterialModule } from '../../../modules/material/material.module';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  private auth: AuthService = inject(AuthService);
  private messageService: MessageService = inject(MessageService);
  private router: Router = inject(Router);

  authData: AuthData = authDataInit;
  msgResult: string = '';
  message: any = true;
  user = this.auth.user;

  login() {
    this.auth.login(this.authData).then(()=>{
      this.router.navigateByUrl('home');
    }).catch(()=>{
      this.msgResult = 'Error al iniciar sesión';
      this.messageService.setMessage('Error al iniciar sesión');
    });
  }

  fillFieldsWithUser() {
    this.authData.email = 'example@gmail.com';
    this.authData.password = '123456';
  }


}
