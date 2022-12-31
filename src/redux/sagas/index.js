import { takeEvery } from 'redux-saga/effects'
import { setActiveRow } from '../actions'
import { SET_ACTIVE_ROW } from '../constants'

export function* handleActiveRow() {
	console.log(setActiveRow)
	yield
}

export function* watchClickSaga() {
	yield takeEvery(SET_ACTIVE_ROW, handleActiveRow)
}

export default function* rootSaga() {
	yield watchClickSaga()
}
