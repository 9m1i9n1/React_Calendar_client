import React, { Component } from 'react';
import CalendarNav from '../components/CalendarNav'

import { connect } from 'react-redux'

import * as calendarNavActions from '../modules/calendar'

class CalendarNavContainer extends Component {

    setTodayDate = () => {
        const { onSetYear, onSetMonth } = this.props

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();

        onSetYear(year);
        onSetMonth(month);
    }

    setDate = (year, month) => {
        const { onSetYear, onSetMonth } = this.props

        onSetYear(year);
        onSetMonth(month);
    }

    componentWillMount() {
        this.setTodayDate()
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
        onSetYear: (year) => {dispatch(calendarNavActions.setYear(year))},
        onSetMonth: (month) => {dispatch(calendarNavActions.setMonth(month))},
        onPrevMonth: () => {dispatch(calendarNavActions.prevMonth())},
        onNextMonth: () => {dispatch(calendarNavActions.nextMonth())},
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CalendarNavContainer)