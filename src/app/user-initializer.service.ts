import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { UserManagementApiService } from './common/api/user-management/user-management-api.service';
import * as UsersActions from './common/store/users/users.actions';

/**
 * @class UserInitializerService populates the NgRx/Store with users.
 * @property {Function} init() can be called only once.
 */
@Injectable({
  providedIn: 'root'
})
export class UserInitializerService {
  private isAlreadyInitialized = false;

  constructor(private readonly userManagementApiService: UserManagementApiService,
              private readonly matSnackBar: MatSnackBar,
              private readonly store: Store) {
  }

  init(): Promise<void> {
    if (this.isAlreadyInitialized) {
      throw new Error('Method was already called.');
    }
    this.isAlreadyInitialized = true;

    return new Promise<void>((resolve, reject) => {
      this.userManagementApiService.getUsers()
        .subscribe({
          next: users => {
            this.store.dispatch(UsersActions.setUsers({ users }));
            resolve();
          },
          error: _ => {
            // TODO: Do error handling when there is a real back-end service call behind.
            this.matSnackBar.open('Error thrown when trying to fetch the user list.', 'OK');
            reject();
          }
        });
    });
  }
}
