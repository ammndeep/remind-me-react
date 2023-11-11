import React, { useState } from 'react'

const AddTodo = ({ onNewItem }) => {
    const [todoName, setTodoName] = useState("");
    const [todoDate, setTodoDate] = useState("");

    const handleTodoName = (event) => {
        setTodoName(event.target.value);
    }

    const handleTodoDate = (event) => {
        setTodoDate(event.target.value);
    }

    const handleAddTodo = () => {
        onNewItem(todoName, todoDate)
        setTodoDate("");
        setTodoName("");
    }

    return (
        <>
            <input type="text" placeholder='Task Enter Here....' className='p-2 rounded'
                value={todoName}
                onChange={handleTodoName} />

            <input type="Date" className='p-2 rounded ml-10'
                value={todoDate}
                onChange={handleTodoDate} />

            <button className='bg-green-600 text-white p-2 rounded ml-5 px-3 hover:bg-green-700' onClick={handleAddTodo}>Add</button>
        </>
    )
}

export default AddTodo
