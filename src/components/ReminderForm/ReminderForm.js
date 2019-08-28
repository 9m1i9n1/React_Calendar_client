import React, { Component } from 'react';

class ReminderForm extends Component {
    render() {
        const {onSetEdit} = this.props

        console.log('#in reminderform');
        
        return (
            <div
                // onSubmit = {(e) => onUpdate(e, reminder)}
            >
                <input
                    // type = 'text'
                    // value = {discription}
                />
                <button>수정</button>
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