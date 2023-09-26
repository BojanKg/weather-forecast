import { TestBed } from '@angular/core/testing';

import { TimeTempService } from './time-temp.service';

describe('TimeTempService', () => {
  let service: TimeTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
