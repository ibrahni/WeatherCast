import  React  from "react";
import Card from 'react-bootstrap/Card'
import './WeatherComponent.css'
import { Col, Row } from "react-bootstrap";
class WeatherComponent extends React.Component {
    render(){
        return (
                <Card id="weather-city">
                <Card.Header  className="text-center">
                    <Row>
                        <Col>
                            <div className="float-left"><img alt ="sunraise" style={{ width: '2rem'}}  src= {this.props.city.country.icon}/></div>
                        </Col>
                        <Col>
                            <h1>{this.props.city.name}</h1>
                        </Col>
                        <Col>
                            <div className="float-right"><img alt ="sunraise" style={{ width: '2rem'}}  src= "/timezone.png"/> {this.props.city.country.timezone}</div>
                        </Col>
                    </Row>
                    
                </Card.Header>
                    <Card.Body className="text-center">
                        <Card.Text>
                            <Row>
                                <Col>
                                    <img alt ="sunraise" style={{ width: '2rem'}}  src="/sunraise.png"/>{this.props.city.sunrise}
                                </Col>
                                <Col><img alt="sunset" style={{ width: '2rem'}}  src="/sunset.png"/>{this.props.city.sunset}</Col>
                                <Col><img alt="humidity" style={{ width: '2rem'}}  src="/humidity.png"/>{this.props.city.humidity}%</Col>
                                <Col><img alt="wind" style={{ width: '2rem'}}  src="/wind.png"/>{this.props.city.wind.speed} m/s</Col>
                                <Col><img alt="geolocation" style={{ width: '2rem'}}  src="/geo.png"/>{this.props.city.coordination.latittude} {this.props.city.coordination.longitude}</Col>
                            </Row>
                        </Card.Text>
                        <Card.Title><h1>{this.props.city.temperature.now}°</h1></Card.Title> 
                        
                        <Card.Img style={{ width: '8rem' }}  src={this.props.city.temperature.icon}/>
                        <Card.Title><h4><b>{this.props.city.temperature.main}</b>,{this.props.city.temperature.description}</h4></Card.Title> 

                    </Card.Body>
                </Card>

        )
    }
}

export default WeatherComponent;