import io from "socket.io-client";
import { getUser } from "../storage/user";

const log = (...args: string[]) => {
  console.log(...args);
};

const user = getUser();

export default class WebSocket {
  private constructor() {}
  private static instance: SocketIOClient.Socket;

  private static init(
    url: string,
    opts?: SocketIOClient.ConnectOpts | undefined
  ) {
    WebSocket.instance = io(url, opts);
    WebSocket.instance.on("connect", () => {
      console.log("connect");
      WebSocket.instance.on(user._id, (data: any) => {
        console.log(data);
      });
    });

    WebSocket.instance.on("disconnect", () => {
      console.log("disconnect");
    });

    // 接收在线用户信息
    WebSocket.instance.on("online", (msg: any) => {
      log("#online,", msg);
    });

    // 系统事件
    WebSocket.instance.on("disconnect", (msg: any) => {
      log("#disconnect", msg);
    });

    WebSocket.instance.on("disconnecting", () => {
      log("#disconnecting");
    });

    WebSocket.instance.on("error", (msg: any) => {
      log("#error");
      console.log(msg);
    });

    WebSocket.instance.on("friend request", (msg: any) => {
      log("#friend request", JSON.stringify(msg, null, 2));
      const { payload } = msg.data;
      if (payload.to === user.username) {
        alert(`${payload.from}请求加你为好友`);
      }
    });
  }

  static getInstance(
    url = "ws://localhost:7001/",
    opts?: SocketIOClient.ConnectOpts | undefined
  ) {
    if (!WebSocket.instance) {
      WebSocket.init(url, opts);
    }
    return WebSocket.instance;
  }
}
