import React, { Component } from 'react';

class ReminderForm extends Component {
    render() {
        // const {discription, onUpdate, onSetEdit} = this.props

        console.log('#in reminderform');
        
        return (
            <form
                method = 'post'
                // onSubmit = {(e) => onUpdate(e, reminder)}
            >
                <input
                    // type = 'text'
                    // value = {discription}
                />
                <button>수정</button>
                <button
                    // onClick = {() => onSetEdit(false)}
                >
                    취소
                </button>
            </form>
        );
    }
}

export default ReminderForm;