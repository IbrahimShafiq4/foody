import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/Services/Auth.service';

export const adminGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> |
    boolean | UrlTree => {

    const _Router = inject(Router);
    const _AuthService = inject(AuthService);

    const role = _AuthService.role;
    console.log(role)
    
    if (localStorage.getItem('userToken') !== null && role == 'SuperAdmin') {
      return true;
    } else {
      _Router.navigate(['/auth/login']);
      return false;
    }
  };
