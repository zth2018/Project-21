import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafequitComponent } from './safequit.component';

describe('SafequitComponent', () => {
  let component: SafequitComponent;
  let fixture: ComponentFixture<SafequitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafequitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafequitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
