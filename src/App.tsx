import React from "react";
import "./App.css";
import routes, { routerConfigModel } from "./routes";
import { HashRouter, Route, Switch } from "react-router-dom";
import FrontendAuth from "./components/FrontendAuth";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Switch>
          {routes.map((item: routerConfigModel, i: number) => {
            if (item.auth) {
              return (
                <FrontendAuth
                  key={i}
                  path={item.path}
                  exact={item.exact}
                  // component={item.component}
                >
                  <item.component />
                </FrontendAuth>
              );
            } else {
              return (
                <Route
                  key={i}
                  path={item.path}
                  exact={item.exact}
                  component={item.component}
                ></Route>
              );
            }
          })}
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
