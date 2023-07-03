import { createReducer, on } from '@ngrx/store';
import { BaseUser } from '../../definitions/base-user';
import { User } from '../../definitions/user';
import * as UsersActions from './users.actions';

export const name = 'users';

export interface UsersState {
  users: Array<User>;
  loggedInUser: BaseUser | null;
}

export const initialState: Readonly<UsersState> = {
  users: [],
  loggedInUser: null
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.clear, (_): UsersState => (initialState)),
  on(UsersActions.setUsers, (state, { users }): UsersState => ({
    ...state,
    users: [...users]
  })),
  on(UsersActions.setLoggedInUser, (state, { user }): UsersState => ({
    ...state,
    loggedInUser: { ...user }
  })),
  on(UsersActions.clearLoggedInUser, (state): UsersState => ({
    ...state,
    loggedInUser: null
  }))
);
