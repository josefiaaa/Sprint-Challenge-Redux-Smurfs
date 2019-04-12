import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'

import './App.css';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    submitHandler = event => {
      event.preventDefault();
      const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
     }
        this.props.addSmurf(newSmurf);
        this.setState({
            name: '', 
            age: '', 
            height: '' 
        })
    }

    render () {
        return (
            <div className='form-wrap'>
                <form onSubmit={this.submitHandler}>
                    <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.changeHandler} />
                    <input type='text' placeholder='Age' name='age' value={this.state.age} onChange={this.changeHandler} />
                    <input type='text' placeholder='Height' name='height' value={this.state.height} onChange={this.changeHandler} />
                    <button className='add'>Add Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
})
  
export default connect(mapStateToProps, { addSmurf })(SmurfForm);