import { TestBed } from '@angular/core/testing';

import { AuthLogGuard } from './auth-log.guard';

describe('AuthLogGuard', () => {
  let guard: AuthLogGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
