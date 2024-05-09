import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public message = signal<string | null>(null);
  public setMessage = (value: any)=>{ this.message.set(value)
  };
}
