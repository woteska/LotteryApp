import { createReducer, on } from '@ngrx/store';
import { BaseUser } from '../../definitions/base-user';
import * as UsersActions from './users.actions';

export const name = 'users';

export interface UsersState {
  users: Array<BaseUser>;
}

export const initialState: Readonly<UsersState> = {
  users: [
    { name: 'admin', id: 6781 },
    { name: 'operator', id: 4336 },
    { name: 'customer', id: 8512 },
    { name: 'employee', id: 3631 }
  ]
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.clear, (_): UsersState => (initialState)),
  on(UsersActions.setUsers, (state, { users }): UsersState => ({
    ...state,
    users
  }))
);
