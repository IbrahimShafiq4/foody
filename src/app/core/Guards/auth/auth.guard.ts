import { inject } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivateFn, 
  Router, 
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean | UrlTree> | 
  Promise<boolean | UrlTree> | 
  boolean | UrlTree => {

    const _Router = inject(Router);

    if (localStorage.getItem('userToken') !== null) {
      return true;
    } else {
      _Router.navigate(['/auth/login']);
      return false;
    }
};
