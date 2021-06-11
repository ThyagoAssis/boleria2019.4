import { TestBed } from '@angular/core/testing';

import { RoutersGuard } from './routers.guard';

describe('RoutersGuard', () => {
  let guard: RoutersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
