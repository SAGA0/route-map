import { GET_ACTIVE_ROUTE, SET_ACTIVE_ROW } from './constants'

export const setActiveRow = (index) => ({
	type: SET_ACTIVE_ROW,
	payload: index,
})

export const getActiveRoute = (record) => ({
	type: GET_ACTIVE_ROUTE,
	payload: record,
})
