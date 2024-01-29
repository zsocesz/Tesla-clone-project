
import './App.css';
import Header from './components/Header';
import Logo from './assets/logo.svg';
import Menu from './assets/menu.svg';

function App() {
  return (
    <div className="App">
      {/*}HEADER menüpontokkal{*/}
      <div className='item-container'></div>
      
        <Header logo={Logo} menu={Menu}/>


      {/*}További komponensek{*/}


    </div>
  );
}

export default App;
