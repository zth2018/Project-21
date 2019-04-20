import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycreatedComponent } from './mycreated.component';

describe('MycreatedComponent', () => {
  let component: MycreatedComponent;
  let fixture: ComponentFixture<MycreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
