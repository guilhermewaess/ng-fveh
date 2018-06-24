import { Injectable, Inject } from '@angular/core';
import { Messages } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class NgFvehLibService {
  constructor(@Inject('messagesObject') public messagesObject: Messages) {}

  getMessage(errorType: string, errorPayload: { [key: string]: any }): string {
    const message = this.messagesObject[errorType](errorPayload);
    return message;
  }
}
