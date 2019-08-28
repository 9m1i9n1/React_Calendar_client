import React, { Component } from 'react';
import PropTypes from 'prop-types'

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

    state = {
        setEdit: false,
        discription: '',
    }

    handleSetEdit = () => {
        const { setEdit } = this.state

        this.setState({
            ...this.state,
            setEdit: !setEdit
        })
    }
    
    handleChage = (e) => {
        const { value } = e.target;
    
        this.setState({
            ...this.state,
            discription: value,
        })
    }

    render() {
        const { dayNum } = this.props;
        const { discription } = this.state;
        const { handleOnChage, handleSetEdit } = this;

        const inDay = (
            <button
                onClick = {handleSetEdit}
            >
                +
            </button>
        )

        const inDayEdit = (
            <input
                type = 'text'
                onChange = {handleOnChage}
                value = {discription}
            />
        )

        return (
            <div className = 'day'>
                <p>{dayNum}</p>
                {(dayNum !== '') ? inDay : null}
                <ReminderList 
                    setEdit = {this.state.setEdit}
                    onSetEdit = {this.handleSetEdit}
                    onChange = {this.handleChage}
                />
            </div>
        );
    }
}

CalendarItem.propTypes = propTypes;
CalendarItem.defaultProps = defaultProps;

export default CalendarItem;