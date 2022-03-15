import React from "react";
import {Badge, Box, styled, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unreadPreviewText: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: -0.17
  },
}));

const UnreadBadge = styled(Badge) ({
  "& .MuiBadge-badge": {
    backgroundColor: "#3A8DFF",
    color: "white",
    marginTop: 10,
  }
});

const ChatContent = ({ conversation, user }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;
  const unreadCount = conversation.messages.filter((message) => message.wasRead === false && message.senderId !== user.id).length;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={unreadCount > 0? classes.unreadPreviewText : classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
        <UnreadBadge badgeContent={unreadCount} />
      </Box>
    </Box>
  );
};

export default ChatContent;
