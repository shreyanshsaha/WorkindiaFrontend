import React, { Component } from "react";
import ReactDOM from "react-dom";
import CallCard from "./CallCard";



export default class CallTab extends Component{
  constructor(props){
    super();
    this.state = {
      calls: props.calls
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ calls: nextProps.calls });  
  }
  
  render(){
    return(
      <>
      {this.state.calls.map((ele)=>{
        return(
          <CallCard
          name={ele.name}
          image="IH"
          time={ele.time}
          incomming={ele.incomming}
          missed={ele.missed}
        />
        )
      })}
        
      </>
    )
  }

  
}