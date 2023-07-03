import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, map, Observable, take } from 'rxjs';
import { LoginDto } from '../../definitions/login-dto';
import { UserCredentialsCheck } from '../../definitions/user-credentials-check';
import * as UsersActions from './../../store/users/users.actions';
import * as UsersSelectors from './../../store/users/users.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient,
              private readonly store: Store) {
  }

  login(loginDto: LoginDto): Observable<void> {
    const userCredentialsCheck$ = this.store.select(UsersSelectors.selectUserCredentialsCheck({ loginDto }));

    return userCredentialsCheck$
      .pipe(
        take(1),
        delay(500), // TODO: Remove fake waiting time when there is a real back-end service call behind.
        map(check => {
          if (check !== UserCredentialsCheck.Valid) {
            throw new Error('Invalid user credentials.');
          }
          const { password, ...rest } = loginDto;
          this.store.dispatch(UsersActions.setLoggedInUser({ user: rest }));
          return;
        })
      );
  }
}
