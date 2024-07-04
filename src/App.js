
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import Banner from './components/Banner';
import Catalogue from './components/Catalogue';
import { Button, Card, Carousel, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import products from './Prod';




const prod = products;




function App() {
  return (
    <div className="App">
      <Topbar/>
      <Banner/>
     
      <div className='container'>
      <Catalogue products={prod}/>
    </div>
      
    </div>
  );
}

export default App;
