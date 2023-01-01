import { SET_CURRENT_RECORD } from '../constants'

const initialState = {
	currentRecord: null,
}

const activeRecord = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_RECORD:
			return {
				...state,
				currentRecord: {
					...action.payload,
					from: [action.payload.fromLat, action.payload.fromLng],
					to: [action.payload.toLat, action.payload.toLng],
				},
			}

		default:
			return state
	}
}

export default activeRecord
