import React from "react";
import { Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import NavBar from "../components/NavBar";
import { routerConfigModel } from "../routes";

const Home = ({ routes }: { routes: Array<routerConfigModel> }) => {
  return (
    <>
      <Box display="flex" height="100%">
        <NavBar />
        <Box flex={1}>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(Home);
