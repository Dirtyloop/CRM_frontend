import { TestBed } from '@angular/core/testing';

import { AdminAcunitUpdateService } from './admin-acunit-update.service';

describe('AdminAcunitUpdateService', () => {
  let service: AdminAcunitUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAcunitUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
