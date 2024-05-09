import { Component, inject } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AuthService } from '../../shared/services/auth/auth.service';
import { WelcomeComponent } from '../private/welcome/welcome.component';
import { RouterOutlet } from '@angular/router';
import { UserPanelComponent } from '../user-panel/user-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, WelcomeComponent, RouterOutlet, UserPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  auth: AuthService = inject(AuthService);
  user = this.auth.user;


}
