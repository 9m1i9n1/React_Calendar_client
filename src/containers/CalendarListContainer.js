import { connect } from 'react-redux'

import * as calendarActions from '../modules/calendar'
import CalendarList from '../components/CalendarList';

import React, { Component } from 'react';

class CalendarListContainer extends Component {
    
    componentDidMount() {
        this.createDay();
    }
    
    componentDidUpdate() {
        this.createDay();
    }

    createDay = () => {
        const {year, month} = this.props

        const days = []

        const dayInMonth = new Date(year, month, 0).getDate()
        const firstDay = new Date(year, (month - 1), 1).getDay();

        for(let i = 0; i < firstDay; i++) {
            days.push(
                {
                    dayNum: '',
                }
            )
        }

        for(let i = 1; i <= dayInMonth; i++) {
            days.push(
                {
                    dayNum: i,
                }
            )
        }

        return days;
    }

    render() {
        return (
            <div>
            <div>
            <CalendarList 
                days = {this.createDay()}
            />
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        year: state.calendar.year,
        month: state.calendar.month,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CalendarListContainer)