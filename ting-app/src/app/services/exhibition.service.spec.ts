import { TestBed } from '@angular/core/testing';

import { ExhibitionService } from './exhibition.service';

describe('ExhibitionService', () => {
  let service: ExhibitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
