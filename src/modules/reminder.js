import uniqueId from 'uuid/v1'

const ADDREMINDER = 'ADD_REMINDER'
const EDITREMINDER = 'EDIT_REMINDER'
const DELETEREMINDER = 'DELETE_REMINDER'

export const addReminder = (reminder) => {
    return {
        type: ADDREMINDER,
        reminder,
    }
}

export const editReminder = (reminder) => {
    return {
        type: EDITREMINDER,
        reminder,
    }
}

export const deleteReminder = (id) => {
    return {
        type: DELETEREMINDER,
    }
}

const initialState = {}

export default function reminder(prevState = initialState, action) {
    switch (action.type) {
        case ADDREMINDER:
            const {year, month, dayNum, description} = action.reminder

            const reminder = {
                id: uniqueId(),
                year: year,
                month: month,
            }

            return {

            }
    
        default:
            return prevState;
    }
}