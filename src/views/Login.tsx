import React, { useEffect, useState } from "react";
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
  Checkbox,
  FormControlLabel,
  Link,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import lion from "../asserts/lion.jpg";
import { useForm } from "react-hook-form";
import { login } from "../api/login";
import Loading from "../constom/loading";
import * as UserStorage from "../utilies/storage/user";
import { changeUser } from "../store/user/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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

const Login = () => {
  const classes = useStyles();
  // immutable
  const user = useSelector((state: any) => state.getIn(["user", "user"]));
  const history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState(user.toJS());
  const [loading, setLoading] = useState(false);

  const handleChangeUserInfo = (e: any) => {
    setUserInfo((state: any) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (data: IUser) => {
    console.log(data);
    setLoading(true);
    login({ username: data.username, password: data.password })
      .then((res: any) => {
        console.log(res);
        if (res.code === 0) {
          UserStorage.setToken(res.data.token);
          if (!data.isRemember) {
            data.password = "";
          }
          UserStorage.setUer({ ...res.data, ...data });
          setLoading(false);
          dispatch(changeUser({ ...res.data, ...data }));
          history.push("/main");
        } else {
          setLoading(false);
        }
        return undefined;
      })
      .catch((error) => {
        setLoading(false);
        console.debug(error);
      });
  };

  useEffect(() => {
    if (UserStorage.getToken()) {
      history.push("/main");
    }
  }, []);

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
                    <FormControl variant="outlined" margin="normal" fullWidth>
                      <InputLabel htmlFor="input-username">Username</InputLabel>
                      <Input
                        required
                        id="input-username"
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
                        error={Boolean(errors.username)}
                      />
                      <FormHelperText>
                        {errors.username
                          ? errors.username.message
                          : "input your username"}
                      </FormHelperText>
                    </FormControl>
                    <FormControl variant="outlined" margin="normal" fullWidth>
                      <InputLabel htmlFor="input-password">Password</InputLabel>
                      <Input
                        id="input-password"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        required
                        value={userInfo.password}
                        onChange={(e) => {
                          handleChangeUserInfo(e);
                        }}
                        inputRef={register({
                          required: "no password is dame",
                          maxLength: { value: 20, message: "too long" },
                        })}
                        type={showPassword ? "text" : "password"}
                        error={Boolean(errors.password)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                setShowPassword((pre) => !pre);
                              }}
                              onMouseDown={(event) => event.preventDefault()}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.password
                          ? errors.password.message
                          : "input your password"}
                      </FormHelperText>
                    </FormControl>
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
                          control={
                            <Checkbox
                              color="secondary"
                              checked={userInfo.isRemember}
                              name="isRemember"
                              inputRef={register}
                              onChange={(e) => {
                                handleChangeUserInfo(e);
                              }}
                            />
                          }
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
