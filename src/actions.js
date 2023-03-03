import { FETCH_BRANCHES_SUCCESS, FETCH_BRANCHES_ERROR } from './actionTypes';

export const FETCH_BRANCHES = 'FETCH_BRANCHES';

export const fetchBranchesSuccess = branches => ({
  type: FETCH_BRANCHES_SUCCESS,
  payload: branches
});

export const fetchBranchesError = error => ({
  type: FETCH_BRANCHES_ERROR,
  payload: error
});

export const fetchBranches = () => async dispatch => {
  dispatch({ type: FETCH_BRANCHES });
  try {
    const response = await fetch('http://empower.besterpsolution.in/api/getbranchbycomp/6');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch(fetchBranchesSuccess(data.data));
  } catch (error) {
    dispatch(fetchBranchesError(error));
  }
};
