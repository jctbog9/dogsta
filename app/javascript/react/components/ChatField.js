import React from 'react';

const ChatField = props => {
  return (
    <div className="chat-field">
      <input
        name={props.name}
        onChange={props.handleMessageChange}
        type='text'
        value={props.content}
      />
      <div>
        <button className='button'>Send</button>
      </div>
    </div>
  );
}

export default ChatField;
