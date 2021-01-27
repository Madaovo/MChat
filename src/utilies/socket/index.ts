import { io, Socket } from "socket.io-client";
import { getToken } from "../storage/user";

const log = (...args: string[]) => {
  console.log(...args);
};

export default class WebSocket {
  static ws: Socket;
  static create(url: string) {
    WebSocket.ws = io(url, {
      // 实际使用中可以在这里传递参数
      query: {
        room: "demo",
        _id: "6008d3cb9b741905c0db54df",
        // token: getToken(),
      },
      transports: ["websocket"],
    });
    console.log(WebSocket.ws);
    WebSocket.ws.on("connect", () => {
      WebSocket.ws.on(WebSocket.ws.id, (data: any) => {
        console.log(data);
      });
    });

    WebSocket.ws.on("disconnect", () => {
      console.log("disconnect");
    });

    // 接收在线用户信息
    WebSocket.ws.on("online", (msg: any) => {
      log("#online,", msg);
    });

    // 系统事件
    WebSocket.ws.on("disconnect", (msg: any) => {
      log("#disconnect", msg);
    });

    WebSocket.ws.on("disconnecting", () => {
      log("#disconnecting");
    });

    WebSocket.ws.on("error", (msg: any) => {
      log("#error");
      console.log(msg);
    });

    WebSocket.ws.on("friend request", (msg: any) => {
      log("#friend request", JSON.stringify(msg, null, 2));
      const { payload } = msg.data;
      if (payload.to === "123456789") {
        alert(`${payload.from}请求加你为好友`);
      }
    });
  }
}
