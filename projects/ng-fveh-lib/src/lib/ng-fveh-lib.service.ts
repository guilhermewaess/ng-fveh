import { Injectable, Inject } from '@angular/core';
import { Messages } from './interfaces';
import { ERROR_MESSAGES_CONFIGURATION } from './Injectors';

@Injectable({
  providedIn: 'root',
})
export class NgFvehLibService {
  constructor(
    @Inject(ERROR_MESSAGES_CONFIGURATION) public messagesObject: Messages,
  ) {}

  getMessage(errorType: string, errorPayload: { [key: string]: any }): string {
    const message = this.messagesObject[errorType](errorPayload);
    return message;
  }
}
