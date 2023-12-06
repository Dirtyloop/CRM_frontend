import { TestBed } from '@angular/core/testing';

import { AdminAcunitAddService } from './admin-acunit-add.service';

describe('AdminAcunitAddService', () => {
  let service: AdminAcunitAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAcunitAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
