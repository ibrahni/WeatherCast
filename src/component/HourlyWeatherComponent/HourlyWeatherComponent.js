import './HourlyWeatherComponent.css'
import  React  from "react";
import Card from 'react-bootstrap/Card'
import HourlyWeather from './data.json'
class HourlyWeatherComponent extends React.Component {
    
    componentDidMount(){
        this.drawHourlyWeather();
    }
    componentDidUpdate(){
        this.drawHourlyWeather();

    }
    drawHourlyWeather(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const clientRectangle = canvas.getBoundingClientRect();
        const step = (clientRectangle.width - 20)/HourlyWeather.length
        const height = clientRectangle.height;
        let axis = HourlyWeather.map(element => element.temperature.now).sort((a,b) => parseInt(a) - parseInt(b))
        let axisStep = axis[axis.length-1] - axis[0]   

        HourlyWeather.forEach((element, key) => {
            this.drawTemperature((height-10)/(axisStep+1), ctx, axisStep, element, step*key, height);
        })
    }
    
    drawTemperature(bottom, ctx, axisStep, element , x, y){
        ctx.fillText(element.temperature.now, x, (bottom*(axisStep-element.temperature.now)))

        ctx.lineTo(x, (bottom*(axisStep-element.temperature.now)))
        ctx.stroke();

        ctx.fillText(element.dt+":00", x, y);
    }

    render(){
        return  (
            <Card id="hourly-display" bg="dark" >
                <Card.Header  className="text-center">
                            <h1>UpComig Hours</h1>
                </Card.Header>
                <Card.Body>
                    <canvas ref="canvas" id="canvas"/>
                </Card.Body>
            </Card>
        )
    }
}


export default HourlyWeatherComponent;  