import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromGames from './games/games.reducer';
import * as fromUsers from './users/users.reducer';

export interface AppRootState {
  [fromUsers.name]: fromUsers.UsersState;
  [fromGames.name]: fromGames.GamesState;
}

export const reducers: ActionReducerMap<AppRootState> = {
  [fromUsers.name]: fromUsers.reducer,
  [fromGames.name]: fromGames.reducer
};

export const metaReducers: MetaReducer<AppRootState>[] = isDevMode() ? [] : [];
