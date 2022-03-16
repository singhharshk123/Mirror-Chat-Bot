import './App.css';
import ChatPage from './pages/chatPage';
import Background from './assests/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg';

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
    <div className="App">
      {navbar()}

      <img src={Background} alt='' className='background_wallpaper' />
      <ChatPage />
    </div>
  );
}

export default App;
