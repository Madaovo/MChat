import React from "react";
import {
  Box,
  withStyles,
  createStyles,
  Theme,
  Avatar,
  CssBaseline,
  useTheme,
} from "@material-ui/core";

import StyledBadge from "../styled-badge";

const SmallAvatar = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 64,
      height: 64,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  })
)(Avatar);

interface IProps {
  msg: string;
  direction: "row-reverse" | "row";
  bgcolor: string;
  avatarUrl: string;
}

const ChatDialogItem = ({ msg, direction, bgcolor, avatarUrl }: IProps) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection={direction}
      justifyContent="flex-end"
      mb={3}
    >
      <Box
        bgcolor={bgcolor}
        p="20px"
        color={theme.palette.getContrastText(bgcolor)}
        display="inline-block"
        borderRadius="15px"
        mr={1}
        ml={1}
      >
        {msg}
      </Box>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <SmallAvatar src={avatarUrl} />
      </StyledBadge>
    </Box>
  );
};

export default React.memo(ChatDialogItem);
