import { TestBed } from '@angular/core/testing';

import { ZoneServiceService } from './zone-service.service';

describe('ZoneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZoneServiceService = TestBed.get(ZoneServiceService);
    expect(service).toBeTruthy();
  });
});
