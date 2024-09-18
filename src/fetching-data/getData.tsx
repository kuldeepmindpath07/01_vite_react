import { useEffect } from "react";
import { GetPosts } from "./getPosts";

export function GetData(){
    useEffect(
        ()=>{
            GetPosts().then(res=>{console.log(res);
            })
            
        },[]
    )
}