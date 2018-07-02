import { InjectionToken } from '@angular/core';
import { Messages } from './interfaces';

export const ERROR_MESSAGES_CONFIGURATION = new InjectionToken<Messages>(
  'MessagesConfiguration',
);
