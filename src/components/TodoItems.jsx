import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({ todoItems, onDelete }) => {
    return (
        <div>
            {
                todoItems.map((item, index) =>
                    <TodoItem key={index}
                        todoName={item.name}
                        todoDate={item.dueDate}
                        onDelete={onDelete}
                    />
                )
            }
        </div>
    )
}

export default TodoItems
