import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {reminder, onSetEdit, onRemove} = this.props

        return (
            <div>
                {reminder.description}
                <button
                    onClick = {onSetEdit(reminder)}
                >수정</button>
                <button
                    onCLick = {onRemove(reminder)}
                >삭제</button>
            </div>
        );
    }
}

export default TodoItem;