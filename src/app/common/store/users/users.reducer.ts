import { createReducer, on } from '@ngrx/store';
import { User } from '../../definitions/user';
import * as UsersActions from './users.actions';

export const name = 'users';

export interface UsersState {
  users: Array<User>;
}

export const initialState: Readonly<UsersState> = {
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.clear, (_): UsersState => (initialState)),
  on(UsersActions.setUsers, (state, { users }): UsersState => ({
    ...state,
    users
  }))
);
