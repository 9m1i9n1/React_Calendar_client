import React, { Component } from 'react';
import { connect } from 'react-redux'
import uniqueId from 'uuid/v1'

import CalendarList from '../components/CalendarList';

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
                    id: uniqueId(),
                    dayNum: '',
                }
            )
        }

        for(let i = 1; i <= dayInMonth; i++) {
            days.push(
                {
                    id: uniqueId(),
                    dayNum: i,
                }
            )
        }

        return days;
    }

    //TODO *********************
    handleAddReminder = () => {

    }

    handleUpdateReminder = () => {
        
    }

    handleRemoveReminder = () => {
        
    }

    render() {
        return (
            <div>
            <div>
            <CalendarList 
                days = {this.createDay()}
                todos = {this.createTodo()}
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