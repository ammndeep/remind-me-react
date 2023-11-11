import React from 'react'

const TodoItem = ({ todoDate, todoName, onDelete }) => {

    return (
        <div className='w-[700px] flex flex-row gap-28 p-2 items-center justify-between border-b-2 border-slate-400'>
            <div className=''>{todoName}</div>
            <div className=''>{todoDate}</div>
            <div>
                <button className='bg-red-500 p-2 rounded-lg px-3 text-white hover:bg-red-600'
                    onClick={() => onDelete(todoName)}>
                    Delete
                </button>
            </div>

        </div>
    )
}

export default TodoItem
