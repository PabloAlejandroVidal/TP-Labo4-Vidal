import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LsService } from '../services/ls/ls.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const ls = inject(LsService);

  if(auth.user){
    return true;
  }else{
    router.navigate(['auth/login']);
    return false;
  }
};
