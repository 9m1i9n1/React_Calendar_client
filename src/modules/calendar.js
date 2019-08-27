import { handleActions, createAction } from 'redux-actions';
import { Map, List } from 'immutable';

const SET_MONTH = "SET_MONTH"
const SET_YEAR = "SET_YEAR"
const PREV_MONTH = "PREV_MONTH"
const NEXT_MONTH = "NEXT_MONTH"

export const setMonth = createAction(SET_MONTH)
export const setYear = createAction(SET_YEAR)
export const prevMonth = createAction(PREV_MONTH)
export const nextMonth = createAction(NEXT_MONTH)

const initialState = Map({
    year: 0,
    month: 0,
})

export default handleActions({
    [SET_MONTH]: (state, action) => {
        const { payload: month } = action

        return state.set('month', month)
    },

    [SET_YEAR]: (state, action) => {
        const { payload: year } = action

        return state.set('year', year)
    },

    [PREV_MONTH]: (state, action) => {
        return state.updateIn(['month'], value => value - 1)
    },

    [NEXT_MONTH]: (state, action) => {
        return state.updateIn(['month'], value => value + 1)
    },
}, initialState)