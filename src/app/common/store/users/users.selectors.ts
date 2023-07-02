import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUsersState = createFeatureSelector<fromUsers.UsersState>(fromUsers.name);

export const selectUsers = createSelector(selectUsersState, state => state.users);
