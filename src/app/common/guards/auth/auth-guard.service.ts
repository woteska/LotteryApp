import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import * as UsersSelectors from '../../store/users/users.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private readonly store: Store,
              private readonly router: Router) {
  }

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): Observable<boolean> {
    return this.activateHandler();
  }

  canActivateChild(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): Observable<boolean> {
    return this.activateHandler();
  }

  check(): void {
    this.isThereLoggedInUser()
      .pipe(
        take(1)
      )
      .subscribe(isThere => {
        if (isThere) {
          this.redirectToApplications();
        } else {
          this.redirectToLogin();
        }
      });
  }

  private activateHandler(): Observable<boolean> {
    return this.isThereLoggedInUser()
      .pipe(
        map(isThere => {
          if (!isThere) {
            this.redirectToLogin();
            return false;
          }
          return isThere;
        })
      );
  }

  private isThereLoggedInUser(): Observable<boolean> {
    return this.store.select(UsersSelectors.selectIsThereLoggedInUser);
  }

  private redirectToLogin(): void {
    this.router.navigate(['authentication', 'login']);
  }

  private redirectToApplications(): void {
    this.router.navigate(['applications']);
  }
}
