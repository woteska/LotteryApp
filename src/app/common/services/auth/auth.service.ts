import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, map, Observable, take } from 'rxjs';
import { LoginDto } from '../../definitions/login-dto';
import { UserCredentialsCheck } from '../../definitions/user-credentials-check';
import { AuthGuardService } from '../../guards/auth/auth-guard.service';
import { RandomService } from '../random/random.service';
import * as UsersActions from './../../store/users/users.actions';
import * as UsersSelectors from './../../store/users/users.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient,
              private readonly store: Store,
              private readonly randomService: RandomService,
              private readonly authGuardService: AuthGuardService) {
  }

  login(loginDto: LoginDto): Observable<void> {
    const userCredentialsCheck$ = this.store.select(UsersSelectors.selectUserCredentialsCheck({ loginDto }));

    return userCredentialsCheck$
      .pipe(
        take(1),
        delay(this.randomService.getRandomInteger({ min: 500, max: 1000 })), // TODO: Remove fake waiting time when there is a real back-end service call behind.
        map(check => {
          if (check !== UserCredentialsCheck.Valid) {
            throw new Error('Invalid user credentials.');
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...rest } = loginDto;
          this.store.dispatch(UsersActions.setLoggedInUser({ user: rest }));
          this.authGuardService.check();
          return;
        })
      );
  }
}
