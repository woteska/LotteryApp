import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginDto } from '../../definitions/login-dto';
import { UserCredentialsCheck } from '../../definitions/user-credentials-check';
import * as fromUsers from './users.reducer';

export const selectUsersState = createFeatureSelector<fromUsers.UsersState>(fromUsers.name);

export const selectUsers = createSelector(selectUsersState, state => {
  return state.users.map(user => {
    const { password, ...rest } = user;
    return rest;
  });
});

const selectUsersWithPasswords = createSelector(selectUsersState, state => state.users);

export const selectUserCredentialsCheck = (props: { loginDto: LoginDto }) =>
  createSelector(selectUsersWithPasswords, users => {

      const foundUser = users.find(user => user.name === props.loginDto.name);
      if (!foundUser) {
        return UserCredentialsCheck.NotFound;
      }
      const isPasswordMatching = foundUser.password === props.loginDto.password;
      if (!isPasswordMatching) {
        return UserCredentialsCheck.Invalid;
      }
      return UserCredentialsCheck.Valid;

    }
  );

const selectLoggedInUser = createSelector(selectUsersState, state => state.loggedInUser);
