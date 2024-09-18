import { useState } from "react";

export const [input,updateData]=useState({
        name:'',
        email:'',
        contact:'',
        password:'',
        confirmPassword:'',
        gender:'',
        subject:'',
        photo:'',
        language:'',
        about:''
})
export function handleChange(e){
    const [name,value]=e.target;
    console.log();
    
    updateData({
        ...input,
        [name]:value
    })
}