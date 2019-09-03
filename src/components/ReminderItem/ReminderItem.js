import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {id, discription, onSetEdit, onRemove} = this.props
        return (
            <div>
                {discription}
                <button
                    // onClick = {onSetEdit(reminder)}
                >수정</button>
                <button
                    onClick = {() => onRemove(id)}
                >삭제</button>
            </div>
        );
    }
}

export default TodoItem;