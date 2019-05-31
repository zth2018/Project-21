import { TestBed } from '@angular/core/testing';

import { InsititutionService } from './insititution.service';

describe('InsititutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsititutionService = TestBed.get(InsititutionService);
    expect(service).toBeTruthy();
  });
});
