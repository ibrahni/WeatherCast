import './SearchComponent.css'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import cities from 'cities.json'
import React from 'react';

class SearchComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          cityName: '',
          suggestedCities: []
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSelectCity(this.state.cityName);            
    }
    
    handleCityName(event) {
        this.setState({
            cityName: event.target.value,
            suggestedCities: this.searchForRelatedCities(event.target.value)
        });
    }

    searchForRelatedCities(start){
        return start && cities.filter(city => city.name.toUpperCase().startsWith(start.toUpperCase())).slice(0,10)
    }

    render(){
        return (
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
                <FormControl type="text" placeholder="City..." 
                  value={this.state.cityName}   
                  onChange={this.handleCityName.bind(this)}
                  className="mr-sm-2 autocomplete" />
                  {
                      this.state.suggestedCities && 
                      (
                        <ListGroup>
                            { this.state.suggestedCities.map(
                                (element, i) => {
                                    return <ListGroup.Item key={i}>{element.name}, {element.country}</ListGroup.Item>
                                })
                            }
                        </ListGroup>
                      )
                  }
            </Form>
        );
    }
}


export default SearchComponent;