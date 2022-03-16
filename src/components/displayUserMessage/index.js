import React from "react";
import USerAvatar from '../../assests/icons8-user-48.png';

const DisplayUserMessage = ({ text }) => {
  return (
    <div className="message-container">
       <img src={USerAvatar} alt="" className="userAvatar" />   
     <div className="user-message">
       {text}
    </div>
    </div>
  );
}

export default DisplayUserMessage;