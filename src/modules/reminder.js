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
            return {

            }
    
        default:
            return prevState;
    }
}