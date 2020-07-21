import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChatCard from "./ChatCard";


export default class ChatTab extends Component {
  constructor(props) {
    super();
    this.state = {
      chats: [],
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ chats: nextProps.chats });
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.chats.map((ele) => {
          return (
            <ChatCard
              name={ele.name}
              message={ele.message}
              time={ele.time}
              unread={ele.unread}
              id={ele.id}
            />
          );
        })}
      </>
    )
  }


}