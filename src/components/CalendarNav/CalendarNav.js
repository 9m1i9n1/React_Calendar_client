import React, { Component } from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    monthTitle: PropTypes.string,
    onPrevMonth: PropTypes.func,
    onNextMonth: PropTypes.func,
}

function createError(funcName) {
    return () => {
        console.error(funcName + 'is not defined');
    }
}

const defaultProps = {
    monthTitle: createError('monthTitle'),
    onPrevMonth: createError('onPrevMonth'),
    onNextMonth: createError('onNextMonth'),
}

class CalendarNav extends Component {
    render() {
        const { monthTitle, onPrevMonth, onNextMonth } = this.props

        return (
            <div>
                <button onClick = {onPrevMonth}>◀</button>
                {monthTitle}
                <button onClick = {onNextMonth}>▶</button>
            </div>
        );
    }
}

CalendarNav.propTypes = propTypes;
CalendarNav.defaultProps = defaultProps;

export default CalendarNav;