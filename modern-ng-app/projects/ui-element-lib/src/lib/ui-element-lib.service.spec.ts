import { TestBed } from '@angular/core/testing';

import { UiElementLibService } from './ui-element-lib.service';

describe('UiElementLibService', () => {
  let service: UiElementLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiElementLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
