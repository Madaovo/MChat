import React from "react";
import {
  Grid,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Box,
  Avatar,
  Button,
} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ChatAvatar from "../components/avatar";
import ChatList from "../components/list";
import ChatDialog from "../components/dialog";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonPinIcon from "@material-ui/icons/PersonPin";

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

const Text = ({ icon, text }: { icon: any; text: string }) => (
  <Box display="flex" alignItems="center" width="100%">
    {icon}
    <Box ml={1}>{text}</Box>
  </Box>
);

const Chat = () => {
  const classes = useStyles();

  return (
    <>
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
        <Box
          display="flex"
          bgcolor="#f5f7fb"
          borderRadius={4}
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
          p={4}
          height="300px"
        >
          <Avatar
            src="https://material-ui.com/static/images/avatar/2.jpg"
            className={classes.avatar}
          />
          <Text icon={<MailOutlineIcon />} text="herabod@gmail.com" />
          <Text icon={<PersonPinIcon />} text="hHerabod" />
          <Button variant="outlined">Archive</Button>
        </Box>
      </Grid>
    </>
  );
};

export default React.memo(Chat);
