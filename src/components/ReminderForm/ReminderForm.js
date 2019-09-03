import React, { Component } from 'react';

class ReminderForm extends Component {
    render() {
        const {onSetEdit, onChange, onSubmit, discription} = this.props
        
        return (
            <div
                // onSubmit = {(e) => onUpdate(e, reminder)}
            >
                <input
                    type = 'text'
                    value = {discription}
                    onChange = {onChange}
                />
                <button
                    onClick = {() => onSubmit()}
                >등록</button>
                <button
                    onClick = {() => onSetEdit()}
                >
                    취소
                </button>
            </div>
        );
    }
}

export default ReminderForm;