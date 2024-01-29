import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Logo from './assets/logo.svg';
import Menu from './assets/menu.svg';
import ModelS from './assets/models.jpg';
import ModelX from './assets/modelx.jpg';
import SolarPanel from './assets/solar_panel.jpg';
import SolarRoof from './assets/solar_roof.jpg';



function App() {
  return (
    <div className="App">
      {/*}Header menüpontokkal{*/}
      <Header logo={Logo} menu={Menu} />
      <div className='item-container'>
        {/*} További komponensek {*/}
        <Item heading="Model S" image={ModelS}/>
        <Item heading="Model X" image={ModelX}/>
        <Item heading="Solar Panel" image={SolarPanel}/>
        <Item heading="Solar Roof" image={SolarRoof}/>
        
      </div>
    </div>
  );
}

export default App;
