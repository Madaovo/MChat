import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import lion from "../asserts/lion.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
    },
    containerR: {
      background: `url(${lion}) no-repeat scroll center center / 100% content-box content-box`,
    },
  })
);

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={5}>
          <Typography>1</Typography>
        </Grid>
        <Grid item xs={7} className={classes.containerR}>
          <Typography>2</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
