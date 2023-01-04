import { combineReducers } from 'redux'
import activeRecordReducer from './activeRecord'

const reducer = combineReducers({
	activeRecord: activeRecordReducer,
})

export default reducer
