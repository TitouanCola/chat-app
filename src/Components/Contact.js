import React from "react";
import "./Contact.css";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {online : false}
  }

  changeStatus = () => {
    this.setState({online : !this.state.online})
    console.log(this.state)
  }

  render() {
    return(
      <div className="Contact">
            <img className="avatar" src={this.props.icon} alt="user's icon"/>
          <div>
            <div className="name">{this.props.name}</div>
            <div onClick={this.changeStatus} className="status">
              <div className={this.state.online ? "status-online" : "status-offline"}></div>
              <div className="status-text">{this.state.online ? "Online":"Offline"}</div>
            </div>
          </div>
      </div>
    )
  }
}

export default Contact;