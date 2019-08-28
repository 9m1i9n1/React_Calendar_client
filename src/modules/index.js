import { combineReducers } from 'redux'
import calendar from './calendar'
import reminder from './reminder'

import { penderReducer } from 'redux-pender'

const reducers = combineReducers({
    calendar,
    reminder,
    pender: penderReducer,
})

export default reducers