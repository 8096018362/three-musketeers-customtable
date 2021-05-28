import { TestBed } from '@angular/core/testing';

import { PreventiveService } from './preventive.service';

describe('PreventiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreventiveService = TestBed.get(PreventiveService);
    expect(service).toBeTruthy();
  });
});
