import { TestBed } from '@angular/core/testing';

import { DiscoverImgsService } from './discover-imgs.service';

describe('DiscoverImgsService', () => {
  let service: DiscoverImgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoverImgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
