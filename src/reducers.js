import { combineReducers } from 'redux';
import {
  FETCH_BRANCHES,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_ERROR
} from './actionTypes';

const initialState = {
  branches: [],
  loading: false,
  error: null
};

const branchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANCHES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_BRANCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        branches: action.payload
      };
    case FETCH_BRANCHES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  branches: branchesReducer
});

export default rootReducer;
