import React from "react";
import "./Contact.css";

const Contact=(props)=>{
  return(
    <div className="Contact">
        <img className="avatar" src={props.icon} alt="user's icon"/>
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"}></div>
          <div className="status-text">{props.online ? "Online":"Offline"}</div>
        </div>
      </div>
    </div>
  )
}

export default Contact;