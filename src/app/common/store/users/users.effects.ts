import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { delay, map, tap } from 'rxjs';
import { AuthGuardService } from '../../guards/auth/auth-guard.service';
import { RandomService } from '../../services/random/random.service';
import * as UsersActions from './users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersEffects {

  readonly logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        UsersActions.logout
      ),
      delay(this.randomService.getRandomInteger({ min: 100, max: 200 })), // TODO: Remove fake waiting time when there is a real back-end service call behind.
      map(_ => {
        return UsersActions.clearLoggedInUser();
      })
    );
  });

  readonly postLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        UsersActions.clearLoggedInUser
      ),
      tap(_ => {
        this.authGuardService.check();
      })
    );
  }, { dispatch: false });

  constructor(private readonly actions$: Actions,
              private readonly store: Store,
              private readonly authGuardService: AuthGuardService,
              private readonly randomService: RandomService) {
  }
}
