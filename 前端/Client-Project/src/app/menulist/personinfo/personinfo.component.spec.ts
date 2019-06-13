import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninfoComponent } from './personinfo.component';

describe('PersoninfoComponent', () => {
  let component: PersoninfoComponent;
  let fixture: ComponentFixture<PersoninfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoninfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
