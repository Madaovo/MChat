import store from "store2";

export const getToken = (): string => {
  return store.session.get("_token") || "";
};
export const setToken = (token: string) => {
  store.session.set("_token", token);
};

export const setUer = (user: IUser): void => {
  store.set("_user", user);
};

export const getUser = (): IUser => {
  return (
    store.get("_user") || {
      username: "",
      password: "",
    }
  );
};
