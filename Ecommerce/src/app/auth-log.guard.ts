import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from './login-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLogGuard implements CanActivate {
  constructor(private router: Router, private loginUser: LoginUserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginUser.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
