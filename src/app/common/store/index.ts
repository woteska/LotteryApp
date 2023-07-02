import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromUsers from './users/users.reducer';

export interface AppRootState {
  [fromUsers.name]: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<AppRootState> = {
  [fromUsers.name]: fromUsers.reducer
};

export const metaReducers: MetaReducer<AppRootState>[] = isDevMode() ? [] : [];
