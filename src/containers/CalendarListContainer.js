import React, { Component } from 'react';
import { connect } from 'react-redux'

import CalendarList from '../components/CalendarList';

import { bindActionCreators } from 'redux';
import * as reminderActions from '../modules/reminder'

class CalendarListContainer extends Component {
    handleGetReminder = async () => {
        const { ReminderActions, year, month } = this.props;
        try{
            await ReminderActions.getReminder(year, month);
            await this.createDay()
        }
        catch(e) {
            console.log(e);
        }
    }

    handleAddReminder = async (daynum, discription) => {
        const { ReminderActions, year, month } = this.props;
        try{
            await ReminderActions.addReminder(year, month, daynum, discription);
            await this.handleGetReminder();
        }
        catch(e) {
            console.log(e);
        }
    }

    handleRemoveReminder = async (id) => {
        const { ReminderActions } = this.props;
        try {
            await ReminderActions.removeReminder(id);
            await this.handleGetReminder();
        }
        catch(e) {
            console.log(e);
        }
    }
    
    componentDidMount() {
        this.handleGetReminder();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if((this.props.reminders === prevProps.reminders) && (this.props.loading !== prevProps.loading) && (prevProps.loading !== 'undefined')) {
            this.handleGetReminder();
        }
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
                    reminders: []
                }
            );
        };

        const DBreminder = this.props.reminders.toJS();

        for(let i = 1; i <= dayInMonth; i++) {
            
            const filteredlist = DBreminder.filter((value) => value.dayNum === i);

            days.push(
                {
                    dayNum: i,
                    reminders: filteredlist,
                }
            )
        };
        
        return days;
    }

    render() {
        const { loading } = this.props;

        console.warn('CalendarListContainer render');
        console.log("#loading", loading);

        if(loading) return null;

        return (
            <div>
                <CalendarList 
                    days = {this.createDay()}
                    onAddReminder = {this.handleAddReminder}
                    onRemoveReminder = {this.handleRemoveReminder}
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
        loading: state.pender.pending['GET_REMINDER'],
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