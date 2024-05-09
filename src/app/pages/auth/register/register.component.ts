import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { authDataInit } from '../../../shared/interfaces/auth-data';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authData = authDataInit;
  msgResult = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  register = ()=> {
    this.auth.register(this.authData).then(()=>{
      this.router.navigateByUrl('home');
    }).catch(()=>{
      this.msgResult = 'Error al registrar el usuario';
    })
  }

}
