import React from "react";
import {
  Box,
  Avatar,
  FormControlLabel,
  Switch,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { RootState } from "store/reducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    largeAvatar: { width: theme.spacing(14), height: theme.spacing(14) },
  })
);

const ChatAvatar = () => {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <Box
        height="300px"
        width="100%"
        display="flex"
        bgcolor="#f3f6fb"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        p={4}
        borderRadius="20px"
      >
        <Avatar
          src="https://material-ui.com/static/images/avatar/1.jpg"
          alt="Avatar"
          className={classes.largeAvatar}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box fontSize={22} fontWeight="bold" mr={1}>
            {user.nickname}
          </Box>
          <SettingsIcon color="primary" />
        </Box>
        <Typography variant="body2">Lead UX/UI Designer</Typography>
        <FormControlLabel label="active" control={<Switch color="primary" />} />
      </Box>
    </>
  );
};

export default React.memo(ChatAvatar);
