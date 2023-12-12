import { TestBed } from '@angular/core/testing';

import { ObserService } from './obser.service';

describe('ObserService', () => {
  let service: ObserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
