import { createSlice,nanoid } from "@reduxjs/toolkit";
let id:string;
interface ITodo{
    id:string,
    text:string,
    isEditable:boolean
}
interface IState{
    todos:Array<{id:string,text:string}>
}
const initialState:IState={
    todos:[]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo:ITodo={
                id:nanoid(),
                text:action.payload,
                isEditable:false
            }
            state.todos.push(todo)
            
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(action.payload.id==todo.id){
                    id=todo.id;
                    todo.isEditable=true;
                    todo.text=action.payload.text;    
                }
                return todo;
            })
            
        },
        updatedTodo:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id==id){
                    todo.text=action.payload;
                    todo.isEditable=false;
                }
                
            })
        }
    }
})
export const {addTodo,removeTodo,updateTodo,updatedTodo}=todoSlice.actions;
export default todoSlice.reducer
