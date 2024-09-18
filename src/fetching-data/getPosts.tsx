export const GetPosts=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'GET'
    }).then(res=>res)
    return await response.json();
}