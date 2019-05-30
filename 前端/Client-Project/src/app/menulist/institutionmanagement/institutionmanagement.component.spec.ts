import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionmanagementComponent } from './institutionmanagement.component';

describe('InstitutionmanagementComponent', () => {
  let component: InstitutionmanagementComponent;
  let fixture: ComponentFixture<InstitutionmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
