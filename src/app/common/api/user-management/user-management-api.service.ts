import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../definitions/user';

@Injectable({
  providedIn: 'root'
})
export class UserManagementApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getUsers(): Observable<Array<User>> {
    return of([
      { username: 'admin', userId: 6781, password: 'admin' },
      { username: 'operator', userId: 4336, password: 'operator' },
      { username: 'customer', userId: 8512, password: 'customer' },
      { username: 'employee', userId: 3631, password: 'employee' }
    ]);
  }

}
