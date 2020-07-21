import React from "react";
import ReactDOM from "react-dom";


/*
Required props:
image
name
last call
*/

export default function ChatCard(props) {
  // this.props = props;
  const { name, image, time, incomming, missed } = props;

  let incommingDiv =
    <svg height="100%" viewBox="0 0 16 16" className="bi bi-telephone-outbound-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
    </svg>;

  if (incomming === "yes") {
    incommingDiv =
      <svg height="100%" viewBox="0 0 16 16" className="bi bi-telephone-inbound-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z" />
      </svg>;
  }


  // console.log("M:" + missed);
  // console.log(missed==="true");
  return (
    <>
      <div className="container call-card my-1">
        <div className="row">
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
              <div className="col text-muted" style={{ fontSize: "0.9rem" }}>
                {time}
              </div>
            </div>
          </div>
          <div className={(missed === true ? "text-danger " : "text-success ") + "col-3 call-icon text-center"}>
            {/* <div className="inner"> */}
            {incommingDiv}
            {/* </div> */}
          </div>
        </div>
        <hr />
      </div>
    </>
  )

}