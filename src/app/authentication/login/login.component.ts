import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { BaseUser } from '../../common/definitions/base-user';
import { LoginDto } from '../../common/definitions/login-dto';
import { AuthService } from '../../common/services/auth/auth.service';
import * as UsersSelectors from './../../common/store/users/users.selectors';
import { LoginForm, LoginFormSchema } from './login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  isLoginInProgress = false;
  isPasswordVisible = false;
  readonly form: LoginForm;
  readonly users$ = this.store.select(UsersSelectors.selectUsers);
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly store: Store,
              private readonly authService: AuthService,
              private readonly matSnackBar: MatSnackBar) {
    this.form = this.getForm();
    this.subscribeToFormChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  submit(): void {
    // Show errors to the user if there are.
    this.form.updateValueAndValidity();

    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.getRawValue();
    const username = formValue.selectedUser?.username;
    if (!username) {
      return;
    }

    this.isLoginInProgress = true;
    this.isPasswordVisible = false;

    // Prevent user from changing the form values during the login process.
    this.form.disable();

    const loginDto: LoginDto = {
      username,
      userId: formValue.userId,
      password: formValue.password
    };

    this.authService.login(loginDto)
      .subscribe({
        error: _ => {
          this.matSnackBar.open('Login failed as credentials are invalid.', 'OK');
          this.form.enable();
          this.isLoginInProgress = false;
        }
      });
  }

  trackBy(index: number, item: BaseUser): string {
    return item.username;
  }

  private getForm(): LoginForm {
    return new FormGroup<LoginFormSchema>({
      selectedUser: new FormControl(null, { nonNullable: false, validators: [Validators.required] }),
      username: new FormControl({ value: '', disabled: true }, {
        nonNullable: true,
        validators: [Validators.required]
      }),
      userId: new FormControl(-1, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern('[0-9]*')]
      }),
      password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  private subscribeToFormChanges(): void {
    this.form.controls.selectedUser.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(user => {
        if (user === null) {
          this.form.reset();
        } else {
          this.form.patchValue(user);
        }
      });
  }
}
