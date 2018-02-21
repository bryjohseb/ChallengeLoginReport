import { TestBed, inject } from '@angular/core/testing';

import { ConfigurationDataService } from './configuration-data.service';

describe('ConfigurationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationDataService]
    });
  });

  it('should be created', inject([ConfigurationDataService], (service: ConfigurationDataService) => {
    expect(service).toBeTruthy();
  }));
});
