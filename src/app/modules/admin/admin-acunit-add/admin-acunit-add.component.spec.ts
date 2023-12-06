import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcunitAddComponent } from './admin-acunit-add.component';

describe('AdminAcunitAddComponent', () => {
  let component: AdminAcunitAddComponent;
  let fixture: ComponentFixture<AdminAcunitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcunitAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAcunitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
