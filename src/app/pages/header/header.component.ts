import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){
  }

  goHome = () => this.router.navigate(['/home']);
  goAbout = () => this.router.navigate(['/about']);
  goRoom = () => this.router.navigate(['/game-room']);


}
