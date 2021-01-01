import  React  from "react";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import './WeatherComponent.css'
import { Col, Row } from "react-bootstrap";
class WeatherComponent extends React.Component {
    render(){
        return (
                <Card id="weather-city">
                <Card.Header  className="text-center"><h1>{this.props.city.name}</h1></Card.Header>
                    <Card.Body className="text-center">
                        <Card.Text>
                            <Row>
                                <Col>
                                    <img alt ="sunraise" style={{ width: '2rem'}}  src="/sunraise.png"/>{this.props.city.sunraise}
                                </Col>
                                <Col><img alt="sunset" style={{ width: '2rem'}}  src="/sunset.png"/>{this.props.city.sunset}</Col>
                                <Col><img alt="humidity" style={{ width: '2rem'}}  src="/humidity.png"/>{this.props.city.humidity}°</Col>
                                <Col><img alt="wind" style={{ width: '2rem'}}  src="/wind.png"/>{this.props.city.wind} km/h</Col>
                            </Row>
                        </Card.Text>
                        <Card.Title><h1>{this.props.city.degree}°</h1></Card.Title> 
                        
                        <Card.Img style={{ width: '8rem' }}  src="/cloudy.png"/>
                        <Form>
                           <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="Weekly"
                            />
                        </Form>
                        <Table  bordered hover className="text-center" >
                            <tbody>
                                <tr>
                                    <td>Friday</td>
                                    <td>24°</td>
                                    <td>12°</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>25°</td>
                                    <td>14°</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>22°</td>
                                    <td>12°</td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td>24°</td>
                                    <td>15°</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>26°</td>
                                    <td>13°</td>
                                </tr>   
                                <tr>
                                    <td>Wednesday</td>
                                    <td>24°</td>
                                    <td>14°</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

        )
    }
}

export default WeatherComponent;