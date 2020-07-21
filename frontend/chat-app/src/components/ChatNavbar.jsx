import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


export default function ChatNavbar(props) {

  const { chatDetails } = props;

  return (
    <>
      <div className="chat-navbar p-2">
        <div className="d-flex justify-content-start p-1">
          <Link to="/">
            <div>
              <svg width="1.4em" height="1.4em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
          </Link>
          <div className="mx-1">
            <div className="img-crop" style={{ width: "30px", height: "30px", overflow: "hidden" }}>
              <img src="https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png" alt="profile" style={{ width: "30px", height: "30px" }} />
            </div>
          </div>
          <div className="ml-2">
            {chatDetails.name}
          </div>

          <hr />
        </div>
      </div>
    </>
  )
}