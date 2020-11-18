import React from "react";
import { Route } from "react-router";
import { routerConfigModel } from "../routes";
import FrontendAuth from "./FrontendAuth";
export default function RouteWithSubRoutes(route: routerConfigModel) {
  return (
    <>
      {route.auth ? (
        <FrontendAuth path={route.path} exact={route.exact}>
          <route.component routes={route.routes} />
        </FrontendAuth>
      ) : (
        <Route
          path={route.path}
          render={(props) => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          )}
        />
      )}
    </>
  );
}
