import { io, Socket } from "socket.io-client";

export class WebSocket {
  static ws: Socket;
  static create(url: string) {
    WebSocket.ws = io(url);
  }
}
