import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersoninfoComponent } from './editpersoninfo.component';

describe('EditpersoninfoComponent', () => {
  let component: EditpersoninfoComponent;
  let fixture: ComponentFixture<EditpersoninfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpersoninfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpersoninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
