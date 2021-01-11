import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  Checkbox,
  FormControlLabel,
  Link,
  CircularProgress,
} from "@material-ui/core";
import lion from "../asserts/lion.jpg";
import { useForm } from "react-hook-form";
import { login } from "../api/login";
import Loading from "../constom/loading";

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
      padding: theme.spacing(6),
    },
  })
);

interface IUserInfo {
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
  const [progress, setProgress] = useState(10);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChangeUserInfo = (e: any) => {
    setUserInfo((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (data: IUserInfo) => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    login(data)
      .then(({ data }) => {
        if (data.code === 0) {
          setTimeout(() => {
            localStorage.setItem("_token", data.data.token);
            clearInterval(timer);
            setLoading(false);
            history.push("/main");
          }, 3000);
        }
        return undefined;
      })
      .catch((error) => {
        clearInterval(timer);
        setLoading(false);
        console.debug(error);
      });
  };

  return (
    <>
      <Grid container className={classes.root} component={Paper}>
        <Grid item xs={5} style={{ display: "flex" }} className={classes.item}>
          <Box
            display="flex"
            flexGrow={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {loading ? (
              <Loading start={loading} space={30} />
            ) : (
              <>
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
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                      >
                        Next Step
                      </Button>
                    </FormControl>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <FormControl>
                        <FormControlLabel
                          label="Remember me"
                          control={<Checkbox color="secondary" />}
                        />
                      </FormControl>
                      <Link href="#" variant="body2" color="secondary">
                        Forgot password?
                      </Link>
                    </Box>
                  </form>
                </Box>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={7} className={classes.containerR}></Grid>
      </Grid>
    </>
  );
};

export default Login;
