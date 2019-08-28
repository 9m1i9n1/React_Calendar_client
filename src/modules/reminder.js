import { handleActions, createAction } from 'redux-actions'
import { Map, List, fromJS, Seq } from 'immutable'

import { pender } from 'redux-pender'
import * as api from '../lib/api'

const GET_REMINDER = 'GET_REMINDER'
const ADD_REMINDER = 'ADD_REMINDER'
const EDIT_REMINDER = 'EDIT_REMINDER'
const DELETE_REMINDER = 'DELETE_REMINDER'

export const getReminder = createAction(GET_REMINDER, api.getReminderAPI)
export const addReminder = createAction(ADD_REMINDER, api.addReminderAPI)
export const editReminder = createAction(EDIT_REMINDER)
export const deleteReminder = createAction(DELETE_REMINDER)

const initialState = Map({
    reminders: List([])
});

export default handleActions({
    ...pender({
        type: GET_REMINDER,
        onSuccess: (state, action) => {
            const {data: DBreminder} = action.payload

            return (
                state.updateIn(['reminders'], (list) => {
                const reminder = list.concat(DBreminder.map((value) => {
                    return Seq(value);
                }))
                return reminder;
            }))
        }
    }),
    ...pender({
        type: ADD_REMINDER,
        onSuccess: (state, action) => {
            return state;
        }
    }),
    [EDIT_REMINDER]: (state, action) => {

    },
    [DELETE_REMINDER]: (state, action) => {
        
    }
}, initialState)