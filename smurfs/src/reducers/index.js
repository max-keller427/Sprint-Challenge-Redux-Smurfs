/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURF, SUCCESS_SMURF, FAILURE_SMURF } from "../actions/";

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FETCHING_SMURF:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case SUCCESS_SMURF:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FAILURE_SMURF:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
