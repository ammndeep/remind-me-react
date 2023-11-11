import React, { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import EmptyMsg from './components/EmptyMsg'

const App = () => {
  const [todoItems, setTodoItems] = useState([]);


  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item is ${itemName} and ${itemDueDate}`);

    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoItems);
  }


  const handleDeleteItem = (todoItemName) => {
    console.log(`Deleted Item ${todoItemName}`);

    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <div className='flex flex-col items-center'>
      <AppName />

      <div className='bg-slate-200 rounded-xl w-fit my-5 p-5'>
        <AddTodo onNewItem={handleNewItem} />
      </div>
      {todoItems.length == 0 && <EmptyMsg todoItems={todoItems} />}
      <div className='p-2 flex flex-col items-center'>
        <TodoItems todoItems={todoItems} onDelete={handleDeleteItem} />
      </div>
    </div>

  )
}

export default App
