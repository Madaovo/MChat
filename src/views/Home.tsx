import React from "react";
import { Switch, Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import { routerConfigModel } from "../routes";

const Home = ({ routes }: { routes: Array<routerConfigModel> }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/chat">Bus</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </>
  );
};

export default React.memo(Home);
