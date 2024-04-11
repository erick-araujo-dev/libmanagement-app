import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { LoginService } from '../services/auth/login.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const loginService = inject(LoginService);  
  if(loginService.isAuthenticate()){
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
};
