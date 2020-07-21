import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChatNavbar from "./ChatNavbar";
import ChatBox from "./ChatBox";
import ChatText from "./ChatText";
import axios from "axios";

const getChatDetails = async (id) => {
  console.log(id);
  const sampleData = await axios("http://localhost:9000/chat/" + id)
  // console.log(sampleData.data);
  return sampleData.data;
}

export default class Chat extends Component {
  constructor(props) {
    super();
    this.state = {
      chatDetails: {},
      msg: "",
      chats: [],
      id: props.match.params.id,
    }
  }

  async componentDidMount() {
    console.log("UPDATED CALLED!");
    let chatDetails = await getChatDetails(this.state.id);
    this.setState({ chatDetails: chatDetails, chats: chatDetails.chats });
    await axios.put("http://localhost:9000/chat/" + this.state.id + "/readReset")
  }

  addMessage = () => {
    // console.log(this.state.msg);
    let chats = this.state.chatDetails.chats;
    if (this.state.msg.length === 0) return;
    chats.push({
      time: Date.now(),
      self: true,
      message: this.state.msg,
    });

    this.setState({ chats: chats, msg: "" });
  }

  handleMessage = (msg) => {
    // console.log(msg);
    this.setState({ msg: msg });
  }

  handleUnread = (index) => {
    let chats = this.state.chatDetails.chats;
    chats[index].unread = 0;

  }

  updateChat = async (size) => {
    // console.log(size);
    let chats = await axios.get("http://localhost:9000/chat/" + this.state.id + "?start=" + size);
    // console.log(chats);
    chats = chats.data.chats;
    console.log(chats);
    if (chats.length === 0) return;
    let chatDetails = this.state.chatDetails;
    // console.log(chatDetails)
    for (let i = 0; i < chats.length; i++)
      chatDetails.chats.unshift(chats[i]);
    console.log(chatDetails);

    this.setState({ chatDetails: chatDetails });
    // console.log(this.state);
    // console.log(chats);
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <div className="chat-container">
          <div>
            <ChatNavbar chatDetails={this.state.chatDetails} handleUnread={this.handleUnread} />
          </div>
          <div className="chat-message-area" style={{ flex: "1" }}>
            <ChatBox chats={this.state.chatDetails.chats} updateChat={this.updateChat} />
          </div>
          <div className="chat-text-container">
            <ChatText addMessage={this.addMessage} handleMessage={this.handleMessage} msg={this.state.msg} />
          </div>
        </div>
      </>
    )
  }
}