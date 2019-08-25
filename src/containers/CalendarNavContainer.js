import React, { Component } from 'react';
import CalendarNav from '../components/CalendarNav'

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

        this.setDate(year, month)
    }

    setDate = (year, month) => {
        const { onSetYear, onSetMonth} = this.props

        onSetYear(year);
        onSetMonth(month);
    }

    handlePrevMonth = () => {
        const {month, year} = this.props;

        ((month - 1) > 0)
        ? this.props.onPrevMonth()
        : this.setDate(year - 1, 12)
    }

    handleNextMonth = () => {
        const {month, year} = this.props;

        ((month + 1) < 12)
        ? this.props.onNextMonth()
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
        year: state.calendar.year,
        month: state.calendar.month,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetYear: (year) => {dispatch(calendarActions.setYear(year))},
        onSetMonth: (month) => {dispatch(calendarActions.setMonth(month))},
        onPrevMonth: () => {dispatch(calendarActions.prevMonth())},
        onNextMonth: () => {dispatch(calendarActions.nextMonth())},
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CalendarNavContainer)