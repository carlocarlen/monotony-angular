import { TestBed } from '@angular/core/testing';

import { ToneJsServiceService } from './tone-js-service.service';

describe('ToneJsServiceService', () => {
  let service: ToneJsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToneJsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
