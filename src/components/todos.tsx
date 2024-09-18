import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo,updatedTodo } from "../features/todo/todoSlice";
import { useState } from "react";

interface ITodo {
  id: string;
  text: string;
  isEditable: boolean;
}
interface IState {
  todos: Array<{ id: string; text: string }>;
}
export function Todos() {
  const todos = useSelector((state) => {
    return state.todo.todos;
  });
  const [input,setInput]=useState('');
  const dispatch = useDispatch();
  let value: string;
  function handleChange(e) {
    setInput(e.target.value)
  }
  return (
    <div>
      {todos.map((todo: ITodo) => (
        <li key={todo.id}>
          {todo.isEditable === true ? (
            <input
              type="text"
              value={todo.isEditable?input:todo.text}
              onChange={handleChange}
            ></input>
          ) : (
            <p>{todo.text}</p>
          )}
          <button onClick={() => {
            setInput(todo.text); 
            if(todo.isEditable==true){
                return(dispatch(updatedTodo(input)))
            }
            return dispatch(updateTodo(todo))
            }}>
            {!todo.isEditable ? "Edit" : "Save"}
          </button>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </div>
  );
}
