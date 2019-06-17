import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePage } from './course.page';

describe('CoursePage', () => {
  let component: CoursePage;
  let fixture: ComponentFixture<CoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
