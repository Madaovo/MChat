import React from "react";
import {
  Grid,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Box,
} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ChatAvatar from "../components/avatar";
import ChatList from "../components/list";
import ChatDialog from "../components/dialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      padding: "30px 20px",
      boxSizing: "border-box",
    },
    inner: {
      padding: theme.spacing(2),
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
  })
);

export default function Chat() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container component={Paper} className={classes.inner} spacing={8}>
        <Grid item xs={3}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" pt={2} pb={2}>
              <ChatBubbleOutlineIcon color="primary" fontSize="large" />
              <Box fontWeight="600" fontSize={22} ml={2}>
                QuickChat
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ChatAvatar />
          </Grid>
          <Grid item xs={12} className={classes.mt}>
            <ChatList />
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.center}>
          <ChatDialog />
        </Grid>
        <Grid item xs={3}>
          <h3>Chat</h3>
        </Grid>
      </Grid>
    </Grid>
  );
}
