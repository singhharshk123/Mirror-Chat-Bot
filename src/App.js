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
    <div className="container row">
     <div>
     {navbar()}
     </div>

    <div className='row'>
    <div className='col-md-6'>
    <div className='ChatBot_heading_container row' >
     <img src={ChatBotAvatar} alt='' className='chatBot_header col-md-2 col-sm-2 col-xs-1' />
       <p className='chatBot_name col-md-6 col-sm-6 col-xs-6' >Mr. Bot</p>
     </div>
    </div>
     
     <div className='col-md-6 col-sm-6 col-xs-6' >
     <ChatPage  />
     </div>
    </div>
    </div>
  );
}

export default App;
