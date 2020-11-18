import Home from "../views/Home";
import Login from "../views/Login";
import Chat from "../views/Chat";
import Pie from "../views/Pie";
import Redirects from "../views/Redirects";

export interface routerConfigModel {
  path: string;
  component?: any;
  auth?: boolean;
  exact?: boolean;
  routes?: Array<routerConfigModel>;
}

const routes: routerConfigModel[] = [
  {
    path: "/",
    component: Redirects,
    exact: true,
  },
  {
    path: "/main",
    component: Home,
    auth: true,
    routes: [
      {
        path: "/main/chat",
        component: Chat,
        auth: true,
        exact: true,
      },
      {
        path: "/main/pie",
        component: Pie,
        auth: true,
        exact: true,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

export default routes;
