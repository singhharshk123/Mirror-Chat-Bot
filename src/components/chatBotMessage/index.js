import React, { useState, useEffect } from "react";
import ChatBotAvatar  from '../../assests/icons8-music-robot-48.png';

function ChatBotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <img src={ChatBotAvatar} alt="" className="chatBotAvatar" /> 
      <div className="bot-message">{isLoading ? "..." : message}</div>
    </div>
  );
}

export default ChatBotMessage;