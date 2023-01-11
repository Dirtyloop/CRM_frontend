import { TestBed } from '@angular/core/testing';

import { AdminCustomerUpdateService } from './admin-customer-update.service';

describe('AdminCustomerUpdateService', () => {
  let service: AdminCustomerUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCustomerUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
