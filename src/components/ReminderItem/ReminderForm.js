import React, { Component } from 'react';

class ReminderForm extends Component {
    render() {
        const {description, onUpdate, onSetEdit} = this.props

        return (
            <form
                method = 'post'
                onSubmit = {(e) => onUpdate(e, reminder)}
            >
                <input
                    type = 'text'
                    value = {description}
                />
                <button>수정</button>
                <button
                    onClick = {() => onSetEdit(null)}
                >
                    취소
                </button>
            </form>
        );
    }
}

export default ReminderForm;