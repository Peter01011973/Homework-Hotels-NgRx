import { TestBed } from '@angular/core/testing';

import { DeactivateEditService } from './deactivate-edit.service';

describe('DeactivateEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactivateEditService = TestBed.get(DeactivateEditService);
    expect(service).toBeTruthy();
  });
});
