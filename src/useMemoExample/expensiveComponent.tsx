import { memo, useMemo, useState } from "react";

const ExpensiveComponent=()=>{
    const sum=()=>{
        console.log('Calculating sum...');
        let i=0;
        for(i=0;i<1000000000;i++){
            i=i+1;
        }
        return i;
    };
    
    const total=useMemo(()=>sum(),[])
    return <>sum: {total}</>
}

const OtherExpensiveComponent=memo(()=>{
        const sum=()=>{
            let i=0;
            for(i=0;i<1000000000;i++){
                i=i+1;
            }
            return i;
        };
        const total=sum()
        return <>sum: {total}</>
    }
)
export const MemoExpensiveComponent=()=>{
    const[count,setCount]=useState(0);
    let data=0;
    return(
        <>
        <OtherExpensiveComponent data={data} count={count}></OtherExpensiveComponent>
        <br />
        <ExpensiveComponent/>
        <button onClick={()=>{setCount(count=>count+1)}}>Re-render Parent</button>
        <p>Parent re-render: {count}</p>
        </>
    )
}