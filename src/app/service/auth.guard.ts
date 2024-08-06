import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  // const cookieService: CookieService = inject(CookieService);<<<THIS METHOD IS OLD COOKIESERVICE WITH KO H2WY IN CLASS>>>
  const tokenInLocalStorage = localStorage.getItem('token');

  // THIS METHOD IS OLD COOKIESERVICE WITH KO H2WY IN CLASS
  // if (cookieService.get('token')) {
  //   return true;
  // } else {
  //   router.navigateByUrl('login');
  //   return false;
  // }

  if (tokenInLocalStorage) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
