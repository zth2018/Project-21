import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberlistForTComponent } from './memberlist-for-t.component';

describe('MemberlistForTComponent', () => {
  let component: MemberlistForTComponent;
  let fixture: ComponentFixture<MemberlistForTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberlistForTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlistForTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
