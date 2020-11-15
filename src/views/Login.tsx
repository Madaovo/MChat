import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Box,
  FormControl,
  Button,
  Paper,
  TextField,
} from "@material-ui/core";
import lion from "../asserts/lion.jpg";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
    },
    containerR: {
      background: `url(${lion}) no-repeat scroll center center / 100% content-box content-box`,
    },
    margin: {
      margin: theme.spacing(1),
    },
    item: {
      display: "block",
    },
  })
);

interface IUserinfo {
  username: string;
  password: string;
}

const Login = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const handleChangeUserInfo = (e: any) => {
    setUserInfo((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (data: IUserinfo) => {
    console.log(data);
  };

  return (
    <>
      <Grid container className={classes.root} component={Paper}>
        <Grid item xs={5} style={{ display: "flex" }}>
          <Box
            display="flex"
            flexGrow={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box display="flex" margin={2}>
              <form onSubmit={handleSubmit(handleLogin)}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="input-username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={userInfo.username}
                  onChange={(e) => {
                    handleChangeUserInfo(e);
                  }}
                  inputRef={register({
                    required: "no username is dame",
                    maxLength: { value: 20, message: "too long" },
                  })}
                  helperText={
                    errors.username
                      ? errors.username.message
                      : "input your username"
                  }
                  error={Boolean(errors.username)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="input-password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  value={userInfo.password}
                  onChange={(e) => {
                    handleChangeUserInfo(e);
                  }}
                  inputRef={register({
                    required: "no password is dame",
                    maxLength: { value: 20, message: "too long" },
                  })}
                  helperText={
                    errors.password
                      ? errors.password.message
                      : "input your password"
                  }
                  error={Boolean(errors.password)}
                />
                <FormControl fullWidth margin="normal">
                  <Button variant="contained" color="primary" type="submit">
                    Next Step
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7} className={classes.containerR}></Grid>
      </Grid>
    </>
  );
};

export default Login;
