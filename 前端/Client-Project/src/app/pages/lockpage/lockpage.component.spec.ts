import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockpageComponent } from './lockpage.component';

describe('LockpageComponent', () => {
  let component: LockpageComponent;
  let fixture: ComponentFixture<LockpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
