import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjoinedComponent } from './myjoined.component';

describe('MyjoinedComponent', () => {
  let component: MyjoinedComponent;
  let fixture: ComponentFixture<MyjoinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjoinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjoinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
