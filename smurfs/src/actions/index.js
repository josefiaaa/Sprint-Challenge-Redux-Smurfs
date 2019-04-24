import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = " ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  console.log('FETCHING')
  dispatch({ type: FETCHING });
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err })
    })
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF })
  axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err })
    })
}

export const deleteSmurf = (event, id) => dispatch => {
  event.preventDefault();
  dispatch({ type: DELETE_SMURF })
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err })
    })
}