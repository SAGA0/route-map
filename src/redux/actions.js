import { SET_CURRENT_RECORD } from './constants'
import { createRoutine } from 'redux-saga-routines'

export const setCurrentRecord = (record) => ({
	type: SET_CURRENT_RECORD,
	payload: record,
})

export const setCurrentRecordRoutine = createRoutine(SET_CURRENT_RECORD)
