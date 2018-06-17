import { TestBed, inject } from '@angular/core/testing';

import { NgFvehLibService } from './ng-fveh-lib.service';

describe('NgFvehLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFvehLibService]
    });
  });

  it('should be created', inject([NgFvehLibService], (service: NgFvehLibService) => {
    expect(service).toBeTruthy();
  }));
});
