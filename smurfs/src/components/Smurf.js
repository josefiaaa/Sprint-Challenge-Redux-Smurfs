import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class Smurf extends React.Component{

    deleteSmurf = (event, id) => {
        event.preventDefault();
        this.props.deleteSmurf(id);
    }

    render () {
        return (
            <div className='smurf-wrap'>
                <button onClick={event => this.props.deleteSmurf(event, this.props.id)}>X</button>
                <h2>Name: {this.props.smurf.name}</h2>
                <h4>Age: {this.props.smurf.age} Smurf Years Old</h4>
                <h4>Height: {this.props.smurf.height} CM</h4>
            </div>
        );
    }
}

export default connect(null, { deleteSmurf })(Smurf);