import { TestBed } from '@angular/core/testing';

import { ExtrasService } from './extras.service';

describe('ExtrasService', () => {
  let service: ExtrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
