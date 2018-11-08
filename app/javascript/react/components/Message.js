import React from 'react';

const Message = ({ message, user }) => {

  let sender;
  if (window.currentUser.id === message.user.id) {
    sender = "sender"
  } else {
    sender = "receiver"
  }

  return(
    <div className={sender}>
      <u>{user.email}</u><br />
      {message.body}
    </div>
  );
};

export default Message;
