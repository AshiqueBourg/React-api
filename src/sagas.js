import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_BRANCHES, fetchBranchesSuccess, fetchBranchesError } from './actions';

function* fetchBranches() {
  try {
    const response = yield call(fetch, 'http://empower.besterpsolution.in/api/getbranchbycomp/6');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = yield response.json();
    yield put(fetchBranchesSuccess(data.data));
  } catch (error) {
    yield put(fetchBranchesError(error));
  }
}

function* branchesSaga() {
  yield takeLatest(FETCH_BRANCHES, fetchBranches);
}

export default branchesSaga;
