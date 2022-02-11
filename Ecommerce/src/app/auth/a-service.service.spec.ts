import { TestBed } from '@angular/core/testing';

import { AServiceService } from './a-service.service';

describe('AServiceService', () => {
  let service: AServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
