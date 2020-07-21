import React, { Component } from 'react';
import Navbar from "./Navbar";
import ChatTab from "./ChatTab";
import CallTab from "./CallTab";
import axios from "axios";

const getChats = async () => {
  const sampleData = await axios.get("http://localhost:9000/chats");
  console.log(sampleData.data);
  return sampleData.data;
}

const getCalls = async () => {
  const sampleData = await axios.get("http://localhost:9000/calls");
  console.log(sampleData.data);
  return sampleData.data;
}

export default class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      chats: [],
      calls: [],
    }
  }

  async componentDidMount() {
    let chats = await getChats();
    let calls = await getCalls();
    
    this.setState({ chats: chats, calls: calls });

  }

  render() {
    return (
      <>
        <Navbar />
        <div className="App">
          {/* <input className="form-control mb-4" id="tableSearch" type="text" placeholder="Type something to search list items" /> */}
          {/* <Chat/> */}
          <nav className="mt-4">
            <div className="container">
              <div className="nav nav-tabs nav-fill d-flex justify-content-around" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-chat-tab" data-toggle="tab" href="#nav-chat" role="tab" aria-controls="nav-chat" aria-selected="true">Chat</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Call</a>
              </div>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active mt-4" id="nav-chat" role="tabpanel" aria-labelledby="nav-chat-tab">
              <div className="container">
                <ChatTab chats={this.state.chats} />
              </div>
            </div>
            <div className="tab-pane fade mt-4" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <CallTab calls={this.state.calls} />
            </div>
          </div>
        </div>
      </>);
  }
}