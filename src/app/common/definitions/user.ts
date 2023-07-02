import { BaseUser } from './base-user';

export interface User extends BaseUser {
  password: string;
}
