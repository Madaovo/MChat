import request from "./request";

export const login = (data: any) => {
  return request({
    url: "/api/login",
    data: data,
    method: "POST",
  });
};
