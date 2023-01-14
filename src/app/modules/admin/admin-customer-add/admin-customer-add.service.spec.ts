import { TestBed } from '@angular/core/testing';

import { AdminCustomerAddService } from './admin-customer-add.service';

describe('AdminCustomerAddService', () => {
  let service: AdminCustomerAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCustomerAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
