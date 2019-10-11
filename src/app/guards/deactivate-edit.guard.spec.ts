import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivateEditGuard } from './deactivate-edit.guard';

describe('DeactivateEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateEditGuard]
    });
  });

  it('should ...', inject([DeactivateEditGuard], (guard: DeactivateEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
