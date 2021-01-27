import React, { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { getToken } from "../utilies/storage/user";
import { useSelector } from "react-redux";

const useWebSocket = (url: string) => {
  const ws = useRef<Socket>();
  const user = useSelector((state: any) => state.getIn(["user", "user"]));

  const initWebSocket = () => {
    ws.current?.on("connect", () => {
      console.log("connect");
      // 监听自己的id
      ws.current?.on(user.toJS()._id, (data: any) => {
        console.log(data);
      });
    });
    ws.current?.on(
      "friend request",
      ({ data, meta }: { data: any; meta: any }) => {
        if (data.to === user.toJS().username) {
          alert(`添加好友${meta.timestamp}`);
        }
      }
    );
    ws.current?.on("disconncet", () => {
      console.log("disconncet");
    });
  };

  const addFriend = (to: number, msg: string) => {
    ws.current?.emit("friend request", {
      target: to,
      payload: {
        msg,
        from: user.toJS().username,
        to,
      },
    });
  };

  const send = (to: number, msg: string) => {
    ws.current?.emit("exchange", {
      target: to,
      payload: {
        msg,
        from: user.toJS().username,
        to,
      },
    });
  };

  useEffect(() => {
    if (!ws.current) {
      const socket = io("ws://127.0.0.1:7001/", {
        query: {
          token: getToken(),
        },
        transports: ["websocket"],
      });
      //   socket.on("connect", () => {
      //     // 监听自己的id
      //     ws.current?.on(user.toJS()._id, (data: any) => {
      //       console.log(data);
      //     });
      //   });
      console.log(socket);
      socket.emit("friend request", {
        target: "790452097",
        payload: {
          msg: "加好友吗",
          from: "790452097",
          to: "790452097",
        },
      });
      initWebSocket();
      ws.current = socket;
    }
    return () => {
      ws.current?.disconnect();
    };
  }, []);
  return { ws: ws.current, addFriend, send };
};

export default useWebSocket;
