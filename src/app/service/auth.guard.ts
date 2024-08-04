import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const cookieService: CookieService = inject(CookieService);
  if (cookieService.get('token')) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
