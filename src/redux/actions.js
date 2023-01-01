import { SET_CURRENT_RECORD } from './constants'

export const setCurrentRecord = (record) => ({
	type: SET_CURRENT_RECORD,
	payload: record,
})
