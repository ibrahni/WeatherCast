import {cities} from './data.json';
import './App.css'
import WeatherList from './component/WeatherList/WeatherList'
import Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';

function App() {
  return (
    <Container>
        <Navbar id="weather-toolBar">
          <Navbar.Brand><span><img alt="weather logo" src="/weather.png" style={{ width: '2rem' }}/></span>WeahterCast</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="City..." className="mr-sm-2" />

            </Form>
          </Navbar.Collapse>
        </Navbar>
        <WeatherList data={cities}/>
    </Container>
  );
}

export default App;
