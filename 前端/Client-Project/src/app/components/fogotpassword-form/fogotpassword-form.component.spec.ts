import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FogotpasswordFormComponent } from './fogotpassword-form.component';

describe('FogotpasswordFormComponent', () => {
  let component: FogotpasswordFormComponent;
  let fixture: ComponentFixture<FogotpasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FogotpasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FogotpasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
