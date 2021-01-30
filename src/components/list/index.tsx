import React, { useState } from "react";
import {
  Box,
  Avatar,
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  withStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    largeAvatar: { width: theme.spacing(14), height: theme.spacing(14) },
    dot: {
      width: "27px",
      height: "27px",
      borderRadius: "50%",
      backgroundColor: "#ebedef",
      color: "#000",
      fontSize: "16px",
      textAlign: "center",
      lineHeight: "27px",
      fontWeight: "bold",
    },
    hidden: {
      display: "none",
    },
    list: {
      transition: "display 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    redDot: {
      width: "27px",
      height: "27px",
      borderRadius: "50%",
      backgroundColor: "#ff5757",
      color: "#fff",
      fontSize: "16px",
      textAlign: "center",
      lineHeight: "27px",
      fontWeight: "bold",
    },
  })
);

const MyListItem = withStyles({
  root: {
    padding: "19px 16px",
    borderRadius: "15px",
  },
  selected: {
    backgroundColor: "#f3f6f9!important",

    "& .MuiListItemText-primary": {
      fontWeight: 600,
    },
  },
})(ListItem);

interface IProps {
  user: IUser;
}

const ChatList = ({ user }: IProps) => {
  const classes = useStyles();
  const [hidden, setHidden] = useState(false);
  console.log(user.friends);
  return (
    <>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          onClick={() => {
            setHidden((val) => !val);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Box fontSize={20} fontWeight="bold">
            Active Conversations
          </Box>
          <span className={classes.dot}>2</span>
          {hidden ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </Box>
        <List className={clsx(classes.list, hidden && classes.hidden)}>
          {user.friends_length > 0 ? (
            user.friends.map((friend: IUser, index: number) => (
              <MyListItem button selected={true} key={index}>
                <ListItemAvatar>
                  <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary={friend.nickname} />
              </MyListItem>
            ))
          ) : (
            <Typography>快去添加好友吧</Typography>
          )}
          {/* <MyListItem button selected={true}>
            <ListItemAvatar>
              <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Henry Boyd" />
          </MyListItem>
          <MyListItem button selected={false}>
            <ListItemAvatar>
              <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Henry Boyd" />
            <span className={classes.redDot}>2</span>
          </MyListItem> */}
        </List>
      </Box>
    </>
  );
};

export default React.memo(ChatList);
