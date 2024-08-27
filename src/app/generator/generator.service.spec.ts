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
    expect(service.nextChar()).toBe('1');
    expect(service.nextChar()).toBe('2');
    // ... and so on 
  })
});
