import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecoursePage } from './createcourse.page';

describe('CreatecoursePage', () => {
  let component: CreatecoursePage;
  let fixture: ComponentFixture<CreatecoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
