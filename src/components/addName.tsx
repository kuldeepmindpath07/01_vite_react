import React, { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { addName } from "../features/redo/redoSlice";

function AddRedo(){
    const [input,setInput]=useState('');
    const dispatch=useDispatch();

    function handleChange(e:React.FormEvent<HTMLElement>)
    {
        dispatch(addName(e.target.value))
    }
    return(
        <input type="text" onChange={handleChange}></input>
    )
}
export {AddRedo}