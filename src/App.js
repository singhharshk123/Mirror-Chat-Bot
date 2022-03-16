import './App.css';
import ChatPage from './pages/chatPage';
import ChatBotAvatar  from './assests/icons8-music-robot-48.png';

function App() {

  const navbar = ( ) => {
    return (
      <div className='navbar' >
        <li className='navbar_elements' > HOME </li>
        <li className='navbar_elements' > ABOUT US </li>
        <li className='navbar_elements' > FEEDBACK </li>
      </div>
    )
  }
  return (
    <div className="container">
     {navbar()}

     <div style={{display:'flex'}}>
     <img src={ChatBotAvatar} alt='' className='chatBot_header' />
       <p className='chatBot_name' >Hii I am Mr. Bot</p>
     </div>
     
      <ChatPage />
    </div>
  );
}

export default App;
