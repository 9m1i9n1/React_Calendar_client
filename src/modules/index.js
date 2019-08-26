import { combineReducers } from 'redux'
import calendar from './calendar'
import reminder from './reminder'

const reducers = combineReducers({
    calendar,
    reminder,
})

export default reducers