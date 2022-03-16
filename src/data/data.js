const ChatBotData = {
    GetChatbotResponse: async message => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (message === "hi") resolve("Welcome to my mirror chatbot!");
          else resolve(message);
        }, 300);
      });
    }
  };
  
  export default ChatBotData;
  