import { Component, inject } from '@angular/core';
import { LsService } from '../../shared/services/ls/ls.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent {
  ls: LsService = inject(LsService);
  auth: AuthService = inject(AuthService);
  router: Router = inject(Router);

  user = this.ls.getEmail();

  logout(){
    this.auth.CloseSession();
    this.router.navigateByUrl('auth/login');
  }
}
