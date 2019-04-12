import React, { Component } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import './App.css';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div className="loading">
          <p>Please Wait...</p>
        </div>
      )
    }
    if (this.props.error) {
      return (
        <div className="error">
          <h3>{this.props.error}</h3>
        </div>
      )
    }
    return (
      <div>
        <h1>Smurf Village</h1>
        <div className='smurfs-wrap'>
          {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
})

export default connect(mapStateToProps, { getSmurfs })(Smurfs)



// import React from 'react';
// import { connect } from 'react-redux';
// import Smurf from './Smurf';

// const Smurfs = () => {
//     return (
//         <div>
//             {this.props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     smurfs: state.smurfs,
//     error: state.error
// })

// export default connect(mapStateToProps)(Smurfs);