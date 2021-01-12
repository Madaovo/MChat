import React from "react";
import {
  Box,
  Paper,
  InputBase,
  makeStyles,
  Theme,
  createStyles,
  IconButton,
  Button,
  Icon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      left: theme.spacing(4),
      right: theme.spacing(4),
      bottom: "20px",
      borderRadius: "15px",
    },
    input: {
      marginLeft: theme.spacing(1),
      padding: "0 7px",
      flex: 1,
      border: "1px solid #eee",
      borderRadius: "5px",
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    button: {
      marginLeft: theme.spacing(2),
    },
  })
);

const ChatInput = () => {
  const classes = useStyles();

  return (
    <>
      <Box component={Paper} p="20px" display="flex" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
          endAdornment={
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SentimentSatisfiedIcon
                style={{ width: "25px", height: "25px", color: "#ffdb89" }}
              />
            </IconButton>
          }
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          className={classes.button}
        >
          Send
        </Button>
        {/* <IconButton className={classes.iconButton} aria-label="send">
          Send
          <SendIcon color="primary" />
        </IconButton> */}
      </Box>
    </>
  );
};

export default React.memo(ChatInput);
