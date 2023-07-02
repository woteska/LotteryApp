import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as UsersSelectors from './../../common/store/users/users.selectors';
import { LoginForm, LoginFormSchema } from './login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  isPasswordVisible = false;
  readonly form: LoginForm;
  readonly users$ = this.store.select(UsersSelectors.selectUsers);
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly store: Store) {
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
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      return;
    }
    // TODO: send login request & handling error / notification
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
