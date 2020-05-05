import { TestBed } from '@angular/core/testing';

import { PrimecheckerService } from './primechecker.service';

describe('PrimecheckerService', () => {
  let service: PrimecheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimecheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
