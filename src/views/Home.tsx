import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import NavBar from "../components/NavBar";
import { routerConfigModel } from "../routes";
import WebSocket from "utilies/socket";
import { getToken, getUser } from "utilies/storage/user";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "30px 20px",
    },
    inner: {
      padding: `${theme.spacing(2)}px 0`,
    },
    mt: {
      marginTop: theme.spacing(2),
    },
    center: {
      position: "relative",
      borderRadius: "15px",
      backgroundColor: "#f3f6fb",
      padding: theme.spacing(4),
    },
    avatar: {
      width: "114px",
      height: "114px",
    },
  })
);

const Home = ({ routes }: { routes: Array<routerConfigModel> }) => {
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    const token = getToken();
    const user = getUser();
    if (token) {
      WebSocket.getInstance("ws://localhost:7001/", {
        query: {
          room: "demo",
          userId: user._id,
          token,
        },
        transports: ["websocket"],
      });
      history.push("/main/chat");
    }
  }, []);

  return (
    <>
      <Box display="flex" height="100%">
        <NavBar />
        <Grid
          container
          className={clsx(classes.root, classes.inner)}
          component={Paper}
          spacing={8}
        >
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Grid>
      </Box>
    </>
  );
};

export default React.memo(Home);
