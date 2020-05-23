import { TestBed } from '@angular/core/testing';

import { ServiceDramasService } from './service-dramas.service';

describe('ServiceDramasService', () => {
  let service: ServiceDramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
