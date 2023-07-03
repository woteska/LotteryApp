import { createAction, props } from '@ngrx/store';
import { BaseUser } from '../../definitions/base-user';
import { User } from '../../definitions/user';

const prefix = '[Users]';

export const init = createAction(`${prefix} Init`);
export const clear = createAction(`${prefix} Clear`);

export const setUsers = createAction(`${prefix} Set Users`,
  props<{ users: Array<User>; }>());

export const setLoggedInUser = createAction(`${prefix} Set Logged In User`,
  props<{ user: BaseUser; }>());

export const logout = createAction(`${prefix} Logout`);

export const clearLoggedInUser = createAction(`${prefix} Clear Logged In User`);
