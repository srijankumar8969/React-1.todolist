import React, { useCallback } from 'react'
import { useState, useEffect,useId } from 'react'
import { TodoContext, TodoProvidor, useTodo } from './context/TodoContext'
import { TodoItems } from './Todolist/TodoItems'
import { TodoForm } from './Todolist/TodoForm'
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo,completed:false} , ...prev])
  }
  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todos)=>todos.id!=id));
  }
  const toggleComplete=(id)=>{
    (todos.map((todo)=>{
      if(todo.id===id){
        if(todo.completed===true) todo.completed=false
        else{
          todo.completed=true
        } 
      }
    }))
  }

  return (
    <>
        <TodoProvidor value={{todos, addTodo, deleteTodo,toggleComplete}}>
            <div className='bg-[#172842] h-screen py-8'>
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (<div 
                            key={todo.id} className='w-full'>
                            <TodoItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvidor>
        
    </>
  )
}

export default App



