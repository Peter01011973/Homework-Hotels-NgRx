import { TestBed } from '@angular/core/testing';

import { FavoritHotelsService } from './favorit-hotels.service';

describe('FavoritHotelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritHotelsService = TestBed.get(FavoritHotelsService);
    expect(service).toBeTruthy();
  });
});
