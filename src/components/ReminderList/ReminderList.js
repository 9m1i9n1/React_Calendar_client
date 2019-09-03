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

    render() {
        const { setEdit, onSetEdit, onChange, onAddReminder, onRemoveReminder } = this.props

        const reminderForm = () => {
            return <ReminderForm 
                onSubmit = {onAddReminder}
                onChange = {onChange}
                onSetEdit = {onSetEdit}
            />
        }

        const mapToComponent = (data) => {
            return data.map((v, k) => {
                return <ReminderItem 
                    key = {k}
                    id = {v._id}
                    discription = {v.discription}
                    onChange = {this.handleChange}
                    onRemove = {onRemoveReminder}
                />
            })
        }

        return (
            <div>
                {(setEdit === true)
                ? reminderForm() : mapToComponent(this.props.reminders)}
            </div>
        );
    }
}

ReminderList.propTypes = propTypes;
ReminderList.defaultProps = defaultProps;

export default ReminderList;