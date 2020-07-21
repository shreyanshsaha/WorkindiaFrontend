import React, { Component } from "react";
import ReactDOM from "react-dom";

export default function ChatText(props) {
  const { addMessage, handleMessage, msg } = props;
  // console.log(msg);
  return (
    <>
      <div className="container row mx-auto">
        <div className="mb-2 p-0 chat-text col">
          <input type="text" class="form-control" onChange={(e)=>handleMessage(e.target.value)} placeholder="" style={{ height: "100%" }} value={msg}/>
        </div>
        <div className="send-button" onClick={() => addMessage()}>
          <span className="icon text-primary">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm5.646 10.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  )
}