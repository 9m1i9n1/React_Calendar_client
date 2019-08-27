import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './CalendarList.css'

import CalendarItem from '../CalendarItem'

const propTypes = {
    day: PropTypes.number,
}

function createError(funcName) {
    return () => {
        console.error(funcName + 'is not defined');
    }
}

const defaultProps = {
    day: -1,
}

class CalendarList extends Component {

    render() {
        const {days, onSetDay} = this.props

        const mapToComponent = (data) => {
            return data.map((v, k) => {
                const {dayNum, reminders, setEdit} = v
                return <CalendarItem
                            key = {k}
                            dayNum = {dayNum}
                            reminder = {reminders}
                            setEdit = {setEdit}
                            onSetDay = {onSetDay}
                        />
            })
        }

        return (
            <div className = 'month'>
                {mapToComponent(days)}
            </div>
        );
    }
}

CalendarList.propTypes = propTypes
CalendarList.defaultProps = defaultProps

export default CalendarList;