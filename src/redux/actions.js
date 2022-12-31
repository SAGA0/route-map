import { SET_ACTIVE_ROW } from './constants'

export const setActiveRow = (index) => ({
	type: SET_ACTIVE_ROW,
	payload: index,
})
