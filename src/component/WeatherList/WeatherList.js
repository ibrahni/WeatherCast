import React from 'react';
import   WeatherComponent  from "./../WeatherComponent/WeatherComponent";

class WeatherList extends React.Component {

    render(){
       return( 
	        <div id="weather-list">
				{
					this.props.data &&
					this.props.data.map((element,i) => {
						return <WeatherComponent  key={i} city={element}/>;
					})
	            }
            </div>
	   )
    }
}

export default WeatherList;