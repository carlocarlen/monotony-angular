import { TestBed } from '@angular/core/testing';

import { ToneJsService } from './tone-js.service';

describe('ToneJsServiceService', () => {
  let service: ToneJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToneJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
