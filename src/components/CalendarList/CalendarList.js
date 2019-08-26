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
        const {days} = this.props

        const mapToComponent = (data) => {
            return data.map((v, k) => {
                return <CalendarItem
                            key = {v.id}
                            dayNum = {v.dayNum}
                            todos = {v.todos}
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