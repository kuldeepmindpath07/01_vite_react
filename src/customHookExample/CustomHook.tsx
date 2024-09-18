import { useFetch } from "./useCustomHook"

export const CustomHook=()=>{
    const data=useFetch("https://jsonplaceholder.typicode.com/todos");
    const value=sum();
    function sum(){
        console.log(data);
    }
    return(
        <>
            <h1>custom hook example</h1>
        </>
    )
}