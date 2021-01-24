import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from '../utilies/storage/user'

const FrontendAuth = ({ children, ...rest }: any) => {
  const isLogin = getToken();
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
