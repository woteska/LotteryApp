import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { AuthGuardService } from '../../guards/auth/auth-guard.service';
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
      map(_ => {
        return UsersActions.clearLoggedInUser();
      }),
      tap(_ => {
        this.authGuardService.check();
      })
    );
  });

  constructor(private readonly actions$: Actions,
              private readonly store: Store,
              private readonly authGuardService: AuthGuardService) {
  }
}
