import { TestBed } from '@angular/core/testing';

import { CanAddGuard } from './can-add.guard';

describe('CanAddGuard', () => {
  let guard: CanAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
