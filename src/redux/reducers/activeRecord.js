import { createReducer } from '@reduxjs/toolkit'
import { setCurrentRecordRoutine } from '../actions'

const initialState = {
	currentRecord: null,
	error: null,
}

const activeRecordReducer = createReducer(initialState, {
	[setCurrentRecordRoutine.SUCCESS]: (state, action) => {
		const { data } = action.payload

		state.currentRecord = {
			...data,
			from: [data.fromLat, data.fromLng],
			to: [data.toLat, data.toLng],
		}
	},
	[setCurrentRecordRoutine.FAILURE]: (state, action) => {
		const { error } = action.payload

		state.error = error
	},
})

export default activeRecordReducer
