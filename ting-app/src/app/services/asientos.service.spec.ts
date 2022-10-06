import { TestBed } from '@angular/core/testing';

import { AsientosService } from './asientos.service';

describe('AsientosService', () => {
  let service: AsientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
