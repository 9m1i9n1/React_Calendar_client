import React, { Component } from 'react';
import { connect } from 'react-redux'

import CalendarList from '../components/CalendarList';

class CalendarListContainer extends Component {
    
    componentDidMount() {
        this.createDay();
    }
    
    componentDidUpdate() {
        this.createDay();
    }

    createDay = () => {
        const { year, month } = this.props;
        const { setDayNum } = this;

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

    handleAddReminder = () => {
        this.setState({
            ...this.state,
            setDayNum: -1,
        })
    }

    render() {
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