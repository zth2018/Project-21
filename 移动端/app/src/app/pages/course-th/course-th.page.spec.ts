import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseThPage } from './course-th.page';

describe('CourseThPage', () => {
  let component: CourseThPage;
  let fixture: ComponentFixture<CourseThPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseThPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseThPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
