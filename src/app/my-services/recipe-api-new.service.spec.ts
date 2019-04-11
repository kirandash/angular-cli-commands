import { TestBed } from '@angular/core/testing';

import { RecipeApiNewService } from './recipe-api-new.service';

describe('RecipeApiNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeApiNewService = TestBed.get(RecipeApiNewService);
    expect(service).toBeTruthy();
  });
});
