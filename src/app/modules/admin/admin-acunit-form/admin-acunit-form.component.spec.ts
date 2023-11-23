import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcunitFormComponent } from './admin-acunit-form.component';

describe('AdminAcunitFormComponent', () => {
  let component: AdminAcunitFormComponent;
  let fixture: ComponentFixture<AdminAcunitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcunitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAcunitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
