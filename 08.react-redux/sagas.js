import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* fetchUser(action) {
    yield call(delay, 1000);
    yield put({ type: "add" });
}

function* mySaga() {
    yield takeEvery("del", fetchUser);
}

export default mySaga;