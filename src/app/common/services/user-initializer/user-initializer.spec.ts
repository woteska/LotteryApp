import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { UserManagementApiService } from '../../api/user-management/user-management-api.service';
import { UserInitializerService } from './user-initializer.service';

describe('UserInitializerService', () => {
  let service: UserInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule,
        MatSnackBarModule
      ],
      providers: [
        provideMockStore(),
        { provide: UserManagementApiService, useValue: {} }
      ]
    });
    service = TestBed.inject(UserInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
