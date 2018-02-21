import { TestBed, inject } from '@angular/core/testing';

import { AutheticationServiceService } from './authetication-service.service';

describe('AutheticationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutheticationServiceService]
    });
  });

  it('should be created', inject([AutheticationServiceService], (service: AutheticationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
