import './App.css'
import data from './data.json'
import SearchComponent from './component/SearchComponent/SearchComponent'
import Container  from 'react-bootstrap/Container';
import weatherService from '../src/service/ServiceConfiguration'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  React  from "react";
import   WeatherComponent  from "./component/WeatherComponent/WeatherComponent";

class App extends React.Component {
  state = {selectedCity: '', weather : data}
  
  componentDidMount(){
    console.log("didmount");
    this.setState({selectedCity:'Rabat'},function(){
      this.handleSelectedCity(this.state.selectedCity)
    });

  }

  handleSelectedCity = (cityValue) => {
    this.setState({selectedCity : cityValue }, function() {
      weatherService.retrieveByName(this.state.selectedCity).then((res) => {
        this.setState({
            weather :  res
        })
      });
    })
  }

  render(){
    return (
      <Container>
          <Navbar id="weather-toolBar">
            <Navbar.Brand><span><img alt="weather logo" src="/weather.png" style={{ width: '2rem' }}/></span>WeahterCast</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <SearchComponent onSelectCity={this.handleSelectedCity}/>
            </Navbar.Collapse>
          </Navbar>
          <WeatherComponent  city={this.state.weather}/>
      </Container>
    );
  }

}

export default App;
