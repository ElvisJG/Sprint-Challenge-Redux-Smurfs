import axios from 'axios';
import axiosAuth from '../axiosAuth';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const LG_ERRORS = 'LG_ERRORS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';

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

export function login(username, password) {
  return dispatch => {
    dispatch({ type: FETCHING });

    return axiosAuth()
      .post('http://localhost:/3333/login', { username, password })
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.payload } });
      })
      .catch(err => {
        dispatch({ type: LG_ERRORS, payload: err.response.data });
      });
  };
}

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });

    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: GET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LG_ERRORS, payload: err });
      });
  };
};

export function addSmurf(newSmurf) {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        dispatch({ type: ADD_SMURF, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LG_ERRORS, payload: err });
      });
  };
}
