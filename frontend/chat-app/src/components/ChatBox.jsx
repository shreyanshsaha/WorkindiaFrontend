import React, { Component } from "react";
import ReactDOM from "react-dom";

const LeftChat = (msg) => {
  return (
    <>
      <div className="chat-bubble-container d-flex flex-column p-0 m-0 my-2 mr-auto">
        <div className="m-0 chat-bubble bg-secondary text-white">
          {msg}
        </div>
      </div>
    </>
  )
}

const RightChat = (msg) => {
  return (
    <>
      <div className="chat-bubble-container d-flex flex-column p-0 m-0 my-2 ml-auto">
        <div className="m-0 chat-bubble bg-primary text-white">
          {msg}
        </div>
      </div>
    </>
  )
}

let position = 0;

export default class ChatBox extends Component {
  constructor(props) {
    super();
    this.state = {
      chats: [],
      theposition: window.pageYOffset,
      start:true,
    };
  }


  componentWillReceiveProps(nextProps) {
    console.log("RECV PROPS");
    this.setState({ chats: nextProps.chats, updateChat: nextProps.updateChat });
  }

  componentWillUpdate(){
    var top = document.getElementsByClassName("chat-bubble")[0];
    if(top!=undefined){
      console.log(top.scrollHeight);
      position = top.scrollHeight;
    }
  }
  componentDidUpdate() {
    console.log("POS")
    console.log(position);
    var element = document.getElementsByClassName("chat-message-area")[0];
    element.scrollTop = 5*position;

  
    // console.log(this.state);
  }

  componentWillUnmount() {
    console.log(this.state);
    var element = document.getElementsByClassName("chat-message-area")[0];
    element.scrollTop = this.state.theposition;
  }


  componentDidMount() {
    var element = document.getElementsByClassName("chat-message-area")[0];

    var that = this;
    element.onscroll = function () {
      console.log(this.scrollTop)
      if (element.scrollTop === 0) {
        that.state.updateChat(that.state.chats.length);
      }
    };
    
    element.scrollTop = element.scrollHeight;
    console.log(element.scrollHeight);
    this.setState({start: false, theposition: element.scrollHeight});
  }


  // listenToScroll = () => {
  //   const winScroll = document.getElementsByClassName("chat-message-area")[0].scrollTop;
  
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight
  
  //   const scrolled = winScroll / height
  
  //   this.setState({
  //     theposition: scrolled,
  //   })
  // }

  // addChat()

  render() {
    // console.log(this.state);
    // console.log(window.pageYOffset)
    console.log(this.state);
    return (
      <>
        <div className="chat-area-container">
          <div className="container d-flex flex-column">
            {this.state.chats.map((ele) => {
              if (ele.self === false)
                return LeftChat(ele.message);
              else
                return RightChat(ele.message);
            })}
          </div>
        </div>
      </>
    )
  }
}