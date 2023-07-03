import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import * as UsersActions from '../../store/users/users.actions';
import * as UsersSelectors from '../../store/users/users.selectors';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterOutlet, MatTooltipModule, StoreModule],
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppContainerComponent {
  readonly loggedInUser$ = this.store.select(UsersSelectors.selectLoggedInUser);

  constructor(private readonly store: Store) {
  }

  logout(): void {
    this.store.dispatch(UsersActions.logout());
  }
}
