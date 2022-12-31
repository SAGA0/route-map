import { takeEvery } from 'redux-saga/effects'
import { setActiveRow } from '../actions'
import { SET_ACTIVE_ROW } from '../constants'

export function* workerSaga() {
	console.log(setActiveRow)
	yield
}

export function* watchClickSaga() {
	yield takeEvery(SET_ACTIVE_ROW, workerSaga)
}

export default function* rootSaga() {
	yield watchClickSaga()
}
