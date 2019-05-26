import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberlistForSComponent } from './memberlist-for-s.component';

describe('MemberlistForSComponent', () => {
  let component: MemberlistForSComponent;
  let fixture: ComponentFixture<MemberlistForSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberlistForSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlistForSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
