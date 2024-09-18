import { useReducer } from "react";

interface IState{
    age:number;
}
interface IAction{
    type:string,
}
export function UseReducerHook(){
    const [state,dispatch]=useReducer(reducerFunction,{age:10});
    function reducerFunction(state:IState,action:IAction){
        switch(action.type){
            case 'increment':{
                return({age:state.age+1});
            }
            case 'decrement':{
                return({age:state.age-1});
            }
            case 'empty':{
                return({age:0})
            }
        }
        return {age:state.age}
    }
    return(
        <>
        <h2>{state.age}</h2>
        <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
        <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
        <button onClick={()=>{dispatch({type:'empty'})}}>clear</button>
        </>
    )
    
}