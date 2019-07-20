import {
  FETCHING,
  LOGIN_SUCCESS,
  GET_SUCCESS,
  LG_ERRORS,
  ADDING_SMURF,
  ADD_SMURF
} from '../actions';
import Login from '../components/Login';
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetching: false,
  errorMessage: null,
  deletingSmurf: null,
  creatingSmurf: null
};

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

export default function smurfsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        errorMessage: null
      };
    case GET_SUCCESS:
      return {
        ...state,
        fetching: false,
        errorMessage: null,
        smurfs: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        creatingSmurf: true
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        creatingSmurf: false
      };
    case LG_ERRORS:
      return {
        ...state,
        fetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
