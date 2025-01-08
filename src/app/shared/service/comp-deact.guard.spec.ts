import { TestBed } from '@angular/core/testing';

import { CompDeactGuard } from './comp-deact.guard';

describe('CompDeactGuard', () => {
  let guard: CompDeactGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompDeactGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
