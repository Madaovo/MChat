import Home from "../views/Home";
import Login from "../views/Login";

export interface routerConfigModel {
  path: string;
  component?: any;
  auth?: boolean;
  exact?: boolean;
}

const routes: routerConfigModel[] = [
  {
    path: "/",
    component: Home,
    auth: true,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default routes;
