import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcunitUpdateComponent } from './admin-acunit-update.component';

describe('AdminAcunitUpdateComponent', () => {
  let component: AdminAcunitUpdateComponent;
  let fixture: ComponentFixture<AdminAcunitUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcunitUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAcunitUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
