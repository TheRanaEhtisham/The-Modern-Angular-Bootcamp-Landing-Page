import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

export interface Command {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  messageInput: Subject<Command>;
  messageOutput: Observable<Command[]>;

  constructor() {
    this.messageInput = new Subject<any>();
    this.messageOutput = this.messageInput.pipe(
      scan((acc: Command[], value: Command) => {
        if (value.type == 'clear') {
          return acc.filter((message) => message.id !== value.id);
        } else {
          return [...acc, value];
        }
      }, [])
    );
  }

  addSuccess(message: string) {
    const id = this.randomId();
    this.messageInput.next({
      id,
      text: message,
      type: 'success',
    });

    setTimeout(() => {
      this.clearMessage(id);
    }, 3000);
  }

  addError(message: string) {
    const id = this.randomId();
    this.messageInput.next({
      id,
      text: message,
      type: 'error',
    });

    setTimeout(() => {
      this.clearMessage(id);
    }, 3000);
  }

  clearMessage(id: number) {
    this.messageInput.next({
      id: id,
      type: 'clear',
    });
  }

  private randomId() {
    return Math.round(Math.random() * 10000);
  }
}
