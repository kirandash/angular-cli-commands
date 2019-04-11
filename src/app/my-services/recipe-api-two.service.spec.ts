import { TestBed } from '@angular/core/testing';

import { RecipeApiTwoService } from './recipe-api-two.service';

describe('RecipeApiTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeApiTwoService = TestBed.get(RecipeApiTwoService);
    expect(service).toBeTruthy();
  });
});
