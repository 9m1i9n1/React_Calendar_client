import uniqueId from 'uuid/v1'

const ADD_REMINDER = 'ADD_REMINDER'
const EDIT_REMINDER = 'EDIT_REMINDER'
const DELETE_REMINDER = 'DELETE_REMINDER'


export const addReminder = (reminder) => {
    return {
        type: ADD_REMINDER,
        reminder,
    }
}

export const editReminder = (reminder) => {
    return {
        type: EDIT_REMINDER,
        reminder,
    }
}

export const deleteReminder = (id) => {
    return {
        type: DELETE_REMINDER,
    }
}

const initialState = {}

export default function reminder(prevState = initialState, action) {
    switch (action.type) {
        case ADD_REMINDER:
            const {year, month, dayNum, description} = action.reminder

            const reminder = {
                year, month, dayNum, description
            }

            return {
            }
    
        default:
            return prevState;
    }
}