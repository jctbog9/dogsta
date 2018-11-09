import React from 'react';

const ChatField = props => {
  return (
    <div>
      <input
        name={props.name}
        onChange={props.handleMessageChange}
        type='text'
        value={props.content}
      />
      <button>Send</button>
    </div>
  );
}

export default ChatField;
