import './HourlyWeatherComponent.css'
import  React  from "react";
import Card from 'react-bootstrap/Card'
import HourlyWeather from './data.json'
class HourlyWeatherComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'hourly' : []
        }
    }

    componentDidMount(){
        this.setState({
            'hourly' : this.drawHourlySVG(),
            'path' : "M" + this.drawHourlySVG().map((element) => element.x+" "+element.y).join(" L")
        });
    }



    drawHourlySVG(){
        const svg = this.refs.hourlySVG;
        const height = svg.clientHeight;
        const width = svg.clientWidth;

        const step = width/(HourlyWeather.length+1)
        let axis = HourlyWeather.map(element => element.temperature.now).sort((a,b) => parseInt(a) - parseInt(b))
        let axisStep = axis[axis.length-1] - axis[0]   
        let fff = axisStep - axis[0];
        let starter = fff < (height)/2 ? height/2 :  0
        const hourly = HourlyWeather.map((element, key) => {
            return this.constructAPoint(starter, axisStep, element, step*key+step, height);
        });
        return hourly
    }

    constructAPoint(starter, axisStep, element , x, y){
        return {
            "x" : x,
            "y" : starter+axisStep-element.temperature.now,
            "temperature" : element.temperature.now,
            "hour": element.dt+":00"
        }
    }
    
    render(){
        return  (
            <Card id="hourly-display" bg="dark" >
                <Card.Header  className="text-center">
                            <h4>UpComig Hours</h4>
                </Card.Header>
                <Card.Body>
                    <svg ref="hourlySVG" id="hourly-svg">
                        <g font-size="15" font-family="sans-serif" fill="black" stroke="none" text-anchor="middle">
                        {
                            this.state.hourly && this.state.hourly.map((element, key) => {
                              return ( <text x={element.x} y={element.y} dy="-10" dx="-3">{element.temperature}</text>)
                            })
                        }
                        </g>
                        <g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">

                            {
                                this.state.hourly.map((element, key) => {
                                    return (
                                        <g class="tick" opacity="1" transform={`translate(${element.x},130)`}>
                                            <text fill="currentColor" y="10" dy="0.71em">{element.hour}</text>
                                        </g>
                                    )
                                })
                            }
                        </g>
                        <path d={this.state.path+"L442 200 L55 200 S"} fill="rgba(255, 204, 0, 0.2)"  />
                        <path d={this.state.path} stroke="#fc0" fill="none" stroke-width="2"/>
                    </svg>
                </Card.Body>
            </Card>
        )
    }
}


export default HourlyWeatherComponent;  