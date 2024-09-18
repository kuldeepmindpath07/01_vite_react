import { createSlice } from "@reduxjs/toolkit";

const initialState={
    names:['kuldeep']
}
let count=0;
export const redoSlice=createSlice({
    name:'redo',
    initialState,
    reducers:{
        addName:(state,action)=>{
        const red=action.payload;
        state.names.push(red);
        },
        removeName:(state,action)=>{
            state.names.filter((name)=>{
                return (name!==action.payload)
            })
        }
    }
})
export const {addName,removeName}=redoSlice.actions;
export default redoSlice.reducer;