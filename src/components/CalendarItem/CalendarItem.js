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
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.setEdit === this.state.setEdit && nextProps.reminders === this.props.reminders) {
            return false;
        }
        return true;
    }

    state = {
        setEdit: false,
        discription: '',
    }

    handleSetEdit = () => {
        const { setEdit } = this.state

        this.setState({
            ...this.state,
            setEdit: !setEdit,
            discription: '',
        })
    }
    
    handleOnChange = (e) => {
        const { value } = e.target;
    
        this.setState({
            ...this.state,
            discription: value,
        })
    }

    handleAddReminder = () => {
        const {dayNum, onAddReminder} = this.props
        const {discription} = this.state

        onAddReminder(dayNum, discription);
        this.handleSetEdit();
    }

    render() {
        const { dayNum, id, reminders, onRemoveReminder } = this.props;
        const { setEdit } = this.state;
        const { handleOnChange, handleSetEdit, handleAddReminder } = this;

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
                    onRemoveReminder = {onRemoveReminder}
                    onAddReminder = {handleAddReminder}
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