import React, { Component } from 'react';
import { Map, List } from 'immutable';
import CalendarNav from '../components/CalendarNav'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import * as calendarActions from '../modules/calendar'
import CalendarWeek from '../components/CalendarWeek';

class CalendarNavContainer extends Component {
    UNSAFE_componentWillMount() {
        this.setTodayDate()
    }

    setTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        console.log('#today:' , today);

        this.setDate(year, month)
    }

    setDate = (year, month) => {
        const { CalendarActions } = this.props

        CalendarActions.setYear(year);
        CalendarActions.setMonth(month);
    }

    handlePrevMonth = () => {
        const { month, year } = this.props
        const { CalendarActions } = this.props

        ((month - 1) > 0)
        ? CalendarActions.prevMonth()
        : this.setDate(year - 1, 12)
    }

    handleNextMonth = () => {
        const {month, year} = this.props;
        const { CalendarActions } = this.props

        ((month + 1) < 12)
        ? CalendarActions.nextMonth()
        : this.setDate(year + 1, 1)
    }

    render() {
        const {year, month} = this.props
        const {handlePrevMonth, handleNextMonth} = this

        return (
            <div>
                <CalendarNav 
                    monthTitle = {`${year}년 - ${month}월`}
                    onPrevMonth = {handlePrevMonth}
                    onNextMonth = {handleNextMonth}
                />
                <CalendarWeek />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        year: state.calendar.get('year'),
        month: state.calendar.get('month'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CalendarActions: bindActionCreators(calendarActions, dispatch),

        // onSetYear: (year) => {dispatch(calendarActions.setYear(year))},
        // onSetMonth: (month) => {dispatch(calendarActions.setMonth(month))},
        // onPrevMonth: () => {dispatch(calendarActions.prevMonth())},
        // onNextMonth: () => {dispatch(calendarActions.nextMonth())},
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CalendarNavContainer)