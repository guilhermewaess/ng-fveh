import { Injectable, Inject } from '@angular/core';
import { Messages } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class NgFvehLibService {
  constructor(@Inject('messagesObject') public messagesObject: Messages) {}

  getMessage(errorType: string): string {
    const message = this.messagesObject[errorType]();
    return message;
  }
}
