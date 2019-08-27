import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {discription, onSetEdit, onRemove} = this.props

        return (
            <div>
                {console.log(discription)}
                
                {discription}
                <button
                    // onClick = {onSetEdit(reminder)}
                >수정</button>
                <button
                    // onCLick = {onRemove(reminder)}
                >삭제</button>
            </div>
        );
    }
}

export default TodoItem;