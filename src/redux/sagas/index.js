import { put, takeLatest } from 'redux-saga/effects'
import { setCurrentRecordRoutine } from '../actions'

function* setCurrentRecordWorker(action) {
	const { success, failure } = setCurrentRecordRoutine
	try {
		yield put(success({ data: action.payload }))
	} catch (error) {
		yield put(failure({ error }))
	}
}

export function* setCurrentRecordWatcher() {
	yield takeLatest(setCurrentRecordRoutine.trigger, setCurrentRecordWorker)
}
