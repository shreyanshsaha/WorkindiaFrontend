import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


/*
Required props:
image
name
top message, time
number of unread messages
*/

export default function ChatCard(props) {
  const { name, image, message, time, unread, id } = props;
  const SPLICE_LENGTH = 25;
  const shortMessage = message.length > SPLICE_LENGTH ? message.substring(0, SPLICE_LENGTH) + "..." : message;

  let badge = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  if (unread > 0) badge = <span className="badge badge-pill badge-success">{unread}</span>;

  return (
    <>
      <div className="container chat-card my-1">
        <Link to={"/chat/"+id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div className="row chat-card-inner">
            <div className="col-2">
              <div className="img-crop" style={{ width: "50px", height: "50px", overflow: "hidden" }}>
                <img src="https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png" alt="profile" style={{ width: "50px", height: "50px" }} />
              </div>
            </div>
            <div className="col-7">
              <div className="row text-left">
                <div className="col">
                  {name}
                </div>
              </div>
              <div className="row">
                <div className="col text-muted" style={{ fontSize: "0.8rem" }}>
                  {shortMessage}
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row text-right">
                <div className="col text-secondary" style={{ fontSize: "0.8rem" }}>
                  {time}
                </div>
                <div className="col">
                  {badge}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </Link>
      </div>
    </>
  )

}