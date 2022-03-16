
import { useState, useEffect } from 'react';
import ChatBotMessage from '../../components/chatBotMessage';
import DisplayUserMessage from '../../components/displayUserMessage/index.js';
import Messages from '../../components/message';
import UserInput from '../../components/userInput';
import ChatBotData from '../../data/data';
import './index.css';

const ChatPage = ( ) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <ChatBotMessage
          key="0"
          fetchMessage={async () => await ChatBotData.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <DisplayUserMessage key={messages.length + 1} text={text} />,
      <ChatBotMessage
        key={messages.length + 2}
        fetchMessage={async () => await ChatBotData.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
    localStorage.setItem('messages', messages);
  };

  return (
    <div className="chatPage">

      <div className="chatbot"> 
       
        <div className='chatbot_header' >
        Mirror Chat Bot          
        </div>

        <Messages messages={messages} />
        <UserInput onSend={send} />

    </div>     
     
    </div>
  );
}

export default ChatPage;
