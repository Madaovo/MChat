import { getToken, getUser } from "utilies/storage/user";

const user = getUser();

export function friendRequest(target: string, to: string, msg: string) {
  return parseMsg(target, {
    from: user.username,
    to,
    msg,
  });
}

export function parseMsg(target: string, payload: any) {
  return {
    target,
    payload,
    token: getToken(),
  };
}