import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockFormComponent } from './lock-form.component';

describe('LockFormComponent', () => {
  let component: LockFormComponent;
  let fixture: ComponentFixture<LockFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
