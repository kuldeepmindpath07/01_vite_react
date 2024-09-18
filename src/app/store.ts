import { configureStore } from "@reduxjs/toolkit";
import todoreducer from '../features/todo/todoSlice'
import redoreducer from '../features/redo/redoSlice.tsx'

export const store=configureStore({
    reducer:{
        todo:todoreducer,
        redo:redoreducer
    }
})