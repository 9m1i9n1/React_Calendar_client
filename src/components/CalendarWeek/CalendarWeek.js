import React, { Component } from 'react';

import './CalendarWeek.css'

class CalendarWeek extends Component {
    state = {
        weekDays: ['일','월','화','수','목','금','토']
    }

    render() {
        const {weekDays} = this.state

        const mapToComponent = (data) => {
            return data.map((v, k) => {
                return <div className = 'weekday'>{v}</div>
            })
        }

        return (
            <div>
                {mapToComponent(weekDays)}
            </div>
        );
    }
}

export default CalendarWeek;