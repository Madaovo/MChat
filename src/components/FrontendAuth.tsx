import React from "react";
import { Route, Redirect } from "react-router-dom";

const FrontendAuth = ({ children, ...rest }: any) => {
  const isLogin = localStorage.getItem("_token");
  console.log(isLogin ? true : false);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default FrontendAuth;
