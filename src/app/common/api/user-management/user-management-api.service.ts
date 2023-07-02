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
      { name: 'admin', id: 6781, password: 'admin' },
      { name: 'operator', id: 4336, password: 'operator' },
      { name: 'customer', id: 8512, password: 'customer' },
      { name: 'employee', id: 3631, password: 'employee' }
    ]);
  }

}
