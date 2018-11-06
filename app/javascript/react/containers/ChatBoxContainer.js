import React, { Component } from 'react';
import Message from '../components/Message';
import ChatField from '../components/ChatField';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.currentUser,
      messages: [],
      message: ''
    }
    this.handleMessageReceipt = this.handleMessageReceipt.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  componentDidMount() {
    App.chatChannel = App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        chat_id: this.props.params["id"]
      },
      {
        connected: () => console.log("ChatChannel connected"),
        disconnected: () => console.log("ChatChannel disconnected"),
        received: data => {
          console.log(data)
          this.handleMessageReceipt(data)
        }
      }
    );
  }

  handleMessageReceipt(message) {
    this.setState({ messages: this.state.messages.concat(message) })
  }

  handleClearForm() {
    this.setState({ message: '' })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let prepMessage = this.state.message
    let user_info = this.state.user
    // this.setState({ messages: this.state.messages.concat(prepMessage) })

    App.chatChannel.send({
     message: prepMessage,
     user: user_info
    })

    this.handleClearForm();
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  render() {
    let messages = this.state.messages.map(message => {
      return(
        <Message
          key={message.messageId}
          message={message}
          user={message.user}
        />
      )
    }, this);

    return(
      <div className="chat-window">
        <div className="messages">
          {messages}
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <ChatField
            content={this.state.message}
            name='message'
            handleMessageChange={this.handleMessageChange}
          />
        </form>
      </div>
    );
  }
}

export default ChatContainer;
