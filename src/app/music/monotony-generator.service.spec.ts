import { TestBed } from '@angular/core/testing';

import { MonotonyGeneratorService } from './monotony-generator.service';

describe('MonotonyGeneratorService', () => {
  let service: MonotonyGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonotonyGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
