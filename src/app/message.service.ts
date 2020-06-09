import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSender = new Subject<string>();

  constructor() { }

  send(message: string) {
    this.messageSender.next(message);
  }

  getObservable(): Observable<string> {
    return this.messageSender.asObservable();
  }
}
