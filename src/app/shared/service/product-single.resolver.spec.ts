import { TestBed } from '@angular/core/testing';

import { ProductSingleResolver } from './product-single.resolver';

describe('ProductSingleResolver', () => {
  let resolver: ProductSingleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductSingleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
