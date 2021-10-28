import { TestBed } from '@angular/core/testing';

import { UpdateFormResolver } from './update-form.resolver';

describe('UpdateFormResolver', () => {
  let resolver: UpdateFormResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UpdateFormResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
