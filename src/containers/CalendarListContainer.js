import React, { Component } from 'react';
import { connect } from 'react-redux'

import CalendarList from '../components/CalendarList';

import { bindActionCreators } from 'redux';
import * as reminderActions from '../modules/reminder'

import { Map, List, Seq } from 'immutable';

class CalendarListContainer extends Component {
    handleGetReminder = async () => {
        const { ReminderActions, year, month } = this.props;
        try{
            console.error('#1');
            
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
        }
        catch(e) {
            console.log(e);
        }
    }
    
    componentDidMount() {
        this.handleGetReminder();
    }
    
    // componentDidUpdate() {
    //     this.createDay();
    // }

    createDay = () => {
        const { year, month } = this.props;

        const days = [];

        const dayInMonth = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, (month - 1), 1).getDay();

        for(let i = 0; i < firstDay; i++) {
            days.push(
                Map({
                    dayNum: '',
                    reminders: List([])
                })
            );
        };

        const DBreminder = this.props.reminders.toJS();

        for(let i = 1; i <= dayInMonth; i++) {
            
            const filteredlist = DBreminder.filter((value) => value.dayNum === i);

            const temp = filteredlist.map(value => Seq(value));

            console.log('#temp', i, temp);

            days.push(
                Map({
                    dayNum: i,
                    reminders: List([
                        ...temp,
                    ])
                })
            )
        };

        return days;
    }

    render() {
        const { loading, reminders } = this.props;

        // console.log('# container:', reminders);
        

        if(loading) return null;
        
        return (
            <div>
                <CalendarList 
                    days = {this.createDay()}
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