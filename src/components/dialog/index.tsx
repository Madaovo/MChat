import React from "react";
import ChatDialogItem from "../dialog-item";
import ChatInput from "../input";

const ChatDialog = () => {
  return (
    <>
      <ChatDialogItem
        msg="Hi Henry"
        direction="row"
        bgcolor="#1a233b"
        avatarUrl="https://material-ui.com/static/images/avatar/1.jpg"
      />
      <ChatDialogItem
        msg="Hi Henry"
        direction="row-reverse"
        bgcolor="#fff"
        avatarUrl="https://material-ui.com/static/images/avatar/2.jpg"
      />
      <ChatDialogItem
        msg="Hi Henry"
        direction="row-reverse"
        bgcolor="#fff"
        avatarUrl="https://material-ui.com/static/images/avatar/2.jpg"
      />
      <ChatInput />
    </>
  );
};

export default React.memo(ChatDialog);
