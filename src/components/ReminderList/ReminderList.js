import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from '../ReminderItem';

const propTypes = {
    reminders: PropTypes.object,
}

function createError(funcName) {
    return () => {
        console.error(funcName + 'is not defined');
    }
}

const defaultProps = {
    reminders: createError('reminders'),
}

class TodoList extends Component {
    render() {
        const {reminders} = this.props

        const mapToComponent = (data) => {
            return data.map((v, k) => {
                return <TodoItem 
                    text = {v.text}
                    // onUpdate = {}
                    // onDelete = {}
                />
            })
        }
        return (
            <div>
                {mapToComponent(reminders)}
            </div>
        );
    }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;