import { handleActions, createAction } from 'redux-actions'
import { Map, List, fromJS } from 'immutable'

import { pender } from 'redux-pender'
import * as api from '../lib/api'

const GET_REMINDER = 'GET_REMINDER'
const ADD_REMINDER = 'ADD_REMINDER'
const EDIT_REMINDER = 'EDIT_REMINDER'
const DELETE_REMINDER = 'DELETE_REMINDER'

export const getReminder = createAction(GET_REMINDER, api.getReminderAPI)
export const addReminder = createAction(ADD_REMINDER)
export const editReminder = createAction(EDIT_REMINDER)
export const deleteReminder = createAction(DELETE_REMINDER)

const initialState = {
    reminders: List(),
};

export default handleActions({
    [GET_REMINDER]: (state, action) => {

    },
    [ADD_REMINDER]: (state, action) => {

    },
    [EDIT_REMINDER]: (state, action) => {

    },
    [DELETE_REMINDER]: (state, action) => {
        
    }
}, initialState)