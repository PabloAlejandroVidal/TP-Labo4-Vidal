import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';
import { authGuard } from './shared/guards/auth.guard';
import { GameRoomComponent } from './pages/game-room/game-room.component';

export const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent, canActivate: [authGuard]
    },
    { path: 'auth',
      loadChildren: ()=> import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    { path: 'about', component: AboutComponent
    },
    { path: 'game-room', component: GameRoomComponent
    },
    { path: '**', component: PageNotFoundComponent
    },
  ]},
];
