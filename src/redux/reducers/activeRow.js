import { SET_ACTIVE_ROW } from '../constants'

const initialState = {
	activeR: {},
}

const activeRow = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_ROW:
			return {
				...state,
				activeR: action.payload,
			}
		default:
			return state
	}
}

export default activeRow
