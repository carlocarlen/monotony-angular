import { TestBed } from '@angular/core/testing';

import { GeneratorService } from './generator.service';

describe('GeneratorService', () => {
  let service: GeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shold produce the correct sequence', () => {
    const expected = ['1', '2', '3', '4', '5',
                      '1', '2', '3', '4', '5',
                      '1', '3', '5', '2', '4',
                      '1', '3', '5', '2', '4'];
    for ( let expectedNextChar of expected ) {
      expect(service.nextChar()).toBe(expectedNextChar); 
    }

  })
});
