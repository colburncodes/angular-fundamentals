import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.accountService.user.pipe(
      map((user) => {
        if (user.name === 'Anonymous') {
          this.router.navigate(['./account/login']);
          return false;
        }
        // add some role checks, if your app has roles...
        //if (!user || !user.roles || user.roles.length === 0) {
        //  this.router.navigate(['not-authorized']);
        //  return false;
        //}
        // TODO: may want to add more extensive role checks per route here
        return true; // true, didn't find a reason to prevent access to the route...
      })
    );
  }
}
