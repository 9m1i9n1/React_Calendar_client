import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Map, List } from 'immutable';

import ReminderItem from '../ReminderItem';
import ReminderForm from '../ReminderForm';

const propTypes = {
    // reminders: PropTypes.object,
}

function createError(funcName) {
    return () => {
        console.error(funcName + 'is not defined');
    }
}

const defaultProps = {
    reminders: createError('reminders'),
}
class ReminderList extends Component {
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.setEdit === this.props.setEdit) {
    //         return false;
    //     }
    //     return true;
    // }

    state = {
        text: '',
        reminders: this.props.reminders
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            text: e.target.value,
        })
    }

    render() {
        const { setEdit, onSetEdit } = this.props

        console.log('#reminderList', this.props.dayNum, this.props.reminders);
        

        const reminderForm = () => {
            return <ReminderForm 
                // onSubmit = {handle}
                onChange = {this.handleChange}
                onSetEdit = {onSetEdit}
            />
        }

        const mapToComponent = (data) => {
            return data.map((v, k) => {
                return <ReminderItem 
                    key = {k}
                    discription = {v.discription}
                    // onUpdate = {}
                    // onDelete = {}
                />
            })
        }

        return (
            <div>
                {(setEdit === true)
                ? reminderForm() : mapToComponent(this.state.reminders)}
            </div>
        );
    }
}

ReminderList.propTypes = propTypes;
ReminderList.defaultProps = defaultProps;

export default ReminderList;