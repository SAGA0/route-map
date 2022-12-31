import { GET_ACTIVE_ROUTE, SET_ACTIVE_ROW } from '../constants'

const initialState = {
	activeID: {},
	activeRoute: [],
}

const activeRow = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_ROW:
			return {
				...state,
				activeID: action.payload,
			}
		case GET_ACTIVE_ROUTE:
			return {
				...state,
				activeRoute: action.payload,
			}
		default:
			return state
	}
}

export default activeRow
