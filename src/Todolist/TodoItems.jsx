import React from 'react'
import { useState, useEffect,useRef } from 'react'
import { useTodo } from '../context/TodoContext'

export function TodoItems({todo}) {
    const [todoMsg,setTodoMsg]=useState(todo.todo);
    const {deleteTodo,toggleComplete,color}=useTodo();
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
  return (
    <div className={`flex flex-row justify-center`}>
        <input type="checkbox" className='w-4 h-4 mr-2 mt-1' onChange={()=> toggleCompleted()}/>
        <input type="text" className={` text-center outline-none w-[80%] bg-black text-white rounded-lg  `} placeholder='WriteTodo...' value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)}  readOnly/>
        <button  className={`inline-flex w-6 h-6 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 shrink-0 ml-3 `} onClick={() => deleteTodo(todo.id)} ><span className=' transform:all hover:rotate-360 hover:scale-75 duration-300'>❌</span></button>
    </div>
  )
}