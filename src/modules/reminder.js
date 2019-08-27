import { handleActions, createAction } from 'redux-actions'

const GET_REMINDER = 'GET_REMINDER'
const ADD_REMINDER = 'ADD_REMINDER'
const EDIT_REMINDER = 'EDIT_REMINDER'
const DELETE_REMINDER = 'DELETE_REMINDER'

export const getReminder = createAction(GET_REMINDER)
export const addReminder = createAction(ADD_REMINDER)
export const editReminder = createAction(EDIT_REMINDER)
export const deleteReminder = createAction(DELETE_REMINDER)

const initialState = {}

export default handleActions({
    [GET_REMINDER]: (state, action) => {

    },
    [ADD_REMINDER]: (state, action) => {

    },
    [EDIT_REMINDER]: (state, action) => {

    },
    [DELETE_REMINDER]: (state, action) => {
        
    }
})

// export const addReminder = (reminder) => {
//     return {
//         type: ADD_REMINDER,
//         reminder,
//     }
// }

// export const editReminder = (reminder) => {
//     return {
//         type: EDIT_REMINDER,
//         reminder,
//     }
// }

// export const deleteReminder = (id) => {
//     return {
//         type: DELETE_REMINDER,
//     }
// }

// export default function reminder(prevState = initialState, action) {
//     switch (action.type) {
//         case ADD_REMINDER:
//             const {year, month, dayNum, description} = action.reminder

//             const reminder = {
//                 year, month, dayNum, description
//             }

//             return {
//             }
    
//         default:
//             return prevState;
//     }
// }