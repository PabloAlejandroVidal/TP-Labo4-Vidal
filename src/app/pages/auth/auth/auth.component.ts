import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { WelcomeComponent } from '../../private/welcome/welcome.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router, RouterOutlet, IsActiveMatchOptions } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [WelcomeComponent, LoginComponent, RegisterComponent, RouterOutlet, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  showLogin: boolean = true;

  constructor(private authService: AuthService, private router: Router){
  }

  isLoggedIn(): boolean {
    return (this.authService.user !== null);
  }

  goLogin = () => this.router.navigate(['/auth/login']);
  goRegister = () => this.router.navigate(['/auth/register']);

  isLoginRouteActive(): boolean {
    return this.router.isActive('auth/login', {
      matrixParams: "exact",
      queryParams: "exact",
      paths: "exact",
      fragment: 'exact'

    });
  }
  isRegisterRouteActive(): boolean {
    return this.router.isActive('auth/register', {
      matrixParams: "exact",
      queryParams: "exact",
      paths: "exact",
      fragment: 'exact'

    });
  }



}
