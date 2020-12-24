import React from "react";
import "./App.css";
import routes, { routerConfigModel } from "./routes";
import { HashRouter, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Switch>
          {routes.map((route: routerConfigModel, i: number) => {
            return <RouteWithSubRoutes key={i} {...route} />;
          })}
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
