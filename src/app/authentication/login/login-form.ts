import { FormControl, FormGroup } from '@angular/forms';
import { BaseUser } from '../../common/definitions/base-user';

export type LoginForm = FormGroup<LoginFormSchema>;

export interface LoginFormSchema {
  user: FormControl<BaseUser | null>;
  name: FormControl<string>;
  id: FormControl<number>;
  password: FormControl<string>;
}
