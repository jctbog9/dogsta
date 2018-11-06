import React from 'react';

const Message = ({ message, user }) => {
  let sender;
  if (window.currentUser.id === user.id) {
    sender = "sender"
  } else {
    sender = "receiver"
  }

  return(
    <div className={sender}>
      <u>{user.email}</u> <br/> {message.message}
    </div>
  );
};

export default Message;
