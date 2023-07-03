import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserManagementApiService } from './user-management-api.service';

describe('UserManagementApiService', () => {
  let service: UserManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
