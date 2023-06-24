import { TestBed } from '@angular/core/testing';

import { AposLoginService } from './apos-login.service';

describe('AposLoginService', () => {
  let service: AposLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AposLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
