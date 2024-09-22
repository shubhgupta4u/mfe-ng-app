import { TestBed } from '@angular/core/testing';

import { UtilLibService } from './util-lib.service';

describe('UtilLibService', () => {
  let service: UtilLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
