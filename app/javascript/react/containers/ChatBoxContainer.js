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
    this.updateScroll = this.updateScroll.bind(this);
  }

  componentDidMount() {

    fetch(`/api/v1/chats/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({ messages: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

    App.chatChannel = App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        shelter_id: this.props.params["id"]
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
    let data = {id: message.id, body: message.message, user: message.user}
    this.setState({ messages: this.state.messages.concat(data) })
    this.updateScroll();
  }

  handleClearForm() {
    this.setState({ message: '' })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let prepMessage = this.state.message
    let user_info = this.state.user

    App.chatChannel.send({
     message: prepMessage,
     user: user_info
    })

    this.handleClearForm();

  }

  updateScroll(){
    let element = document.getElementById("scroll-div");
    element.scrollTop = element.scrollHeight;
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  render() {
    console.log(`These are the messages ${this.state.messages}`)
    let messages = this.state.messages.map(message => {
      return(
        <Message
          key={message.id}
          message={message}
          user={message.user}
        />
      )
    }, this);

    return(
      <div className="chat-window">
        <div className="messages-cover">
          <div className="messages" id="scroll-div">
            {messages}
          </div>
        </div>
        <form onSubmit={this.handleFormSubmit} className="chat-field">
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
