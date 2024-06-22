import { createContext, useContext,useState } from "react";
export const TodoContext = createContext({
    todos:[{}],
    addTodo:(todo)=>{},
    updateTodo:(id,todoMsg)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
    color:''
});
export const useTodo= ()=>{
    return useContext(TodoContext);
}
export const TodoProvidor = TodoContext.Provider;