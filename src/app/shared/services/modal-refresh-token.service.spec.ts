import { TestBed } from '@angular/core/testing';

import { ModalRefreshTokenService } from './modal-refresh-token.service';

describe('ModalRefreshTokenService', () => {
  let service: ModalRefreshTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalRefreshTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
