import { TestBed } from '@angular/core/testing';

import { ErrorModalService } from './error-modal-service.service';

describe('ErrorModalServiceService', () => {
  let service: ErrorModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
