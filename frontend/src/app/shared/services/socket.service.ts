import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:any
  constructor() {
    this.socket=io('http://localhost:4000')
   }
   emitEvent(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }

  onEvent(eventName: string, callback: (data: any) => void): void {
    this.socket.on(eventName, callback);
  }
}
