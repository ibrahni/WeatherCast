import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React from 'react';

class SearchComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          cityName: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSelectCity(this.state.cityName);            
    }
    
    handleCityName(event) {
        this.setState({
            cityName: event.target.value,
        });
    }

    render(){
        return (
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
                <FormControl type="text" placeholder="City..." 
                  value={this.state.cityName}   
                  onChange={this.handleCityName.bind(this)}
                  className="mr-sm-2" />
            </Form>
        );
    }
}


export default SearchComponent;