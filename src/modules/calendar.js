const SETMONTH = "SET_MONTH"
const SETYEAR = "SET_YEAR"
const PREVMONTH = "PREV_MONTH"
const NEXTMONTH = "NEXT_MONTH"

export const setMonth = (month) => {
    return {
        type: SETMONTH,
        month,
    }
}

export const setYear = (year) => {
    return {
        type: SETYEAR,
        year,
    }
}

export const prevMonth = () => {
    return {
        type: PREVMONTH,
    }
}

export const nextMonth = () => {
    return {
        type: NEXTMONTH,
    }
}

const initialState = {
    year: 0,
    month: 0,
}

export default function calendar(prevState = initialState, action) {
    switch (action.type) {
        case SETMONTH:
            return {
                ...prevState,
                month: action.month,
            }
        
        case SETYEAR:
            return {
                ...prevState,
                year: action.year,
            }

        case PREVMONTH:
            return {
                ...prevState,
                month: prevState.month - 1,
            }
        
        case NEXTMONTH:
            return {
                ...prevState,
                month: prevState.month + 1,
            }
    
        default:
            return prevState;
    }
}