import { FormControl, FormGroup } from '@angular/forms';
import { BaseUser } from '../../common/definitions/base-user';

export type LoginForm = FormGroup<LoginFormSchema>;

export interface LoginFormSchema {
  selectedUser: FormControl<BaseUser | null>;
  username: FormControl<string>;
  userId: FormControl<number>;
  password: FormControl<string>;
}
