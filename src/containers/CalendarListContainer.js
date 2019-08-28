import React, { Component } from 'react';
import { connect } from 'react-redux'

import CalendarList from '../components/CalendarList';

import { bindActionCreators } from 'redux';
import * as reminderActions from '../modules/reminder'

class CalendarListContainer extends Component {
    initialize = async () => {
        const { ReminderActions, year, month } = this.props;
        try{
            await ReminderActions.getReminder(year, month);
        }
        catch(e) {
            console.log(e);
        }
    }

    handleAddReminder = async (daynum, discription) => {
        const { ReminderActions, year, month } = this.props;
        try{
            await ReminderActions.addReminder(year, month, daynum, discription);
        }
        catch(e) {
            console.log(e);
            
        }
    }
    
    componentDidMount() {
        this.initialize();
        this.createDay();
    }
    
    componentDidUpdate() {
        this.createDay();
    }

    createDay = () => {
        const { year, month } = this.props;

        const days = [];

        const dayInMonth = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, (month - 1), 1).getDay();

        for(let i = 0; i < firstDay; i++) {
            days.push(
                {
                    dayNum: '',
                }
            );
        };

        for(let i = 1; i <= dayInMonth; i++) {
            days.push(
                {
                    dayNum: i,
                    reminders: []
                }
            )
        };

        return days;
    }

    render() {
        const { loading, reminders } = this.props;

        if(loading) return null;
        
        return (
            <div>
                <CalendarList 
                    days = {this.createDay()}
                    onSetEdit = {this.setEdit}
                    // todos = {this.createTodo()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        year: state.calendar.get('year'),
        month: state.calendar.get('month'),
        reminders: state.reminder.get('reminders'),
        loading: state.pender.pending['reminder/GET_REMINDER'],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ReminderActions: bindActionCreators(reminderActions, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CalendarListContainer)