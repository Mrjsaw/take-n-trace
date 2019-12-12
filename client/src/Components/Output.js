import React, {Component} from 'react';

class Output extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.data.trackingnumber}</h1>
                <h3>{this.props.data.status}</h3>
                <h3>{this.props.data.date}</h3>
                <h3>{this.props.data.type}</h3>
            </div>
        )
    };
};

export default Output;
