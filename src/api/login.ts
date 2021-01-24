import request from "./request";

export const login = (data: any) => {
  return request({
    url: "/users/login",
    data: data,
    method: "POST",
  });
};
