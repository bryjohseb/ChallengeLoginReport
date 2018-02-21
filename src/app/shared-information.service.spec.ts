import { TestBed, inject } from '@angular/core/testing';

import { SharedInformationService } from './shared-information.service';

describe('SharedInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedInformationService]
    });
  });

  it('should be created', inject([SharedInformationService], (service: SharedInformationService) => {
    expect(service).toBeTruthy();
  }));
});
