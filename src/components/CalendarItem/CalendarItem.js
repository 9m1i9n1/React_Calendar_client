import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './CalendarItem.css'

const propTypes = {
    dayInfo: PropTypes.func,
}

function createError(funcName) {
    return () => {
        console.error(funcName + 'is not defined');
    }
}

const defaultProps = {
    dayInfo: createError('dayInfo')
}

class CalendarItem extends Component {

    render() {
        const {dayNum, onAddReminder} = this.props

        const inDay = (
            <button>
                +
            </button>
        )

        return (
            <div className = 'day'>
                <p>{dayNum}</p>
                {dayNum !== '' ? inDay : null}
            </div>
        );
    }
}

CalendarItem.propTypes = propTypes;
CalendarItem.defaultProps = defaultProps;

export default CalendarItem;