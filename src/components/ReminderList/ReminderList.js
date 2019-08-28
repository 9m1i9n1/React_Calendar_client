import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
    state = {
        text: '',
        reminders: [
            // {
            //     discription: '안녕하세요'
            // },
        ]
    }

    render() {
        const { setEdit, onSetEdit } = this.props

        const reminderForm = () => {
            console.log('#in reminderForm func');
            
            return <ReminderForm 
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