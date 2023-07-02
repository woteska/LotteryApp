import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../common/services/auth/auth.service';
import * as UsersSelectors from './../../common/store/users/users.selectors';
import { LoginForm, LoginFormSchema } from './login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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

    this.isLoginInProgress = true;
    this.isPasswordVisible = false;

    // Prevent user from changing the form values during the login process.
    this.form.disable();

    const formValue = this.form.getRawValue();
    this.authService.login(formValue)
      .subscribe({
        next: () => {
          // TODO: Handle redirection.
        },
        error: _ => {
          this.matSnackBar.open('Login failed as credentials are invalid.', 'OK');
          this.form.enable();
          this.isLoginInProgress = false;
        }
      });
  }

  private getForm(): LoginForm {
    return new FormGroup<LoginFormSchema>({
      user: new FormControl(null, { nonNullable: false, validators: [Validators.required] }),
      name: new FormControl({ value: '', disabled: true }, { nonNullable: true, validators: [Validators.required] }),
      id: new FormControl(-1, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern('[0-9]*')]
      }),
      password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  private subscribeToFormChanges(): void {
    this.form.controls.user.valueChanges
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
