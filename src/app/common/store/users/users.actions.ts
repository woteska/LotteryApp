import { createAction, props } from '@ngrx/store';
import { BaseUser } from '../../definitions/base-user';

const prefix = '[Users]';

export const init = createAction(`${prefix} Init`);
export const clear = createAction(`${prefix} Clear`);

export const setUsers = createAction(`${prefix} Set Users`,
  props<{ users: Array<BaseUser>; }>());
