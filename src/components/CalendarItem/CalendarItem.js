import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Map, List } from 'immutable';

import ReminderList from '../ReminderList'

import './CalendarItem.css'

const propTypes = {
    dayInfo: PropTypes.func,
}

function createError(funcName) {
    return () => {
        console.error(funcName + 'is not defined');
    }
}

const defaultProps = {
    dayInfo: createError('dayInfo')
}

class CalendarItem extends Component {
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.setEdit === this.state.setEdit) {
    //         return false;
    //     }
    //     return true;
    // }

    state = {
        setEdit: false,
        reminders: this.props.reminders.toJS(),
    }

    handleSetEdit = () => {
        const { setEdit } = this.state

        this.setState({
            ...this.state,
            setEdit: !setEdit,
        })
    }
    
    handleOnChange = (e) => {
        const { value } = e.target;
    
        this.setState({
            ...this.state,
            discription: value,
        })
    }


    render() {
        const { dayNum } = this.props;
        const { setEdit, reminders } = this.state;
        const { handleOnChange, handleSetEdit } = this;

        console.log('#calendarItem', dayNum, this.state.reminders);

        return (
            <div className = 'day'>
                <p>{dayNum}</p>
                {(dayNum !== '') 
                ?
                (<div>
                <button onClick = {handleSetEdit}>
                    +
                </button>
                <ReminderList 
                    dayNum = {dayNum}
                    reminders = {reminders}
                    setEdit = {setEdit}
                    onSetEdit = {handleSetEdit}
                    onChange = {handleOnChange}
                />
                </div>)
                : null}
            </div>
        );
    }
}

CalendarItem.propTypes = propTypes;
CalendarItem.defaultProps = defaultProps;

export default CalendarItem;