import { TestBed, inject } from '@angular/core/testing';

import { NgFvehLibService } from './ng-fveh-lib.service';
import { Messages } from './interfaces';

fdescribe('NgFvehLibService', () => {
  let service: NgFvehLibService;
  let messagesConfigurationMock: Messages;

  beforeEach(() => {
    messagesConfigurationMock = { required: () => 'Field is required' };
    service = new NgFvehLibService(messagesConfigurationMock);
  });

  it('should be created', () => {});
});
