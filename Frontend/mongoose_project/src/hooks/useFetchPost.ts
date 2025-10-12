import { useEffect, useState } from "react"

import { getPosts } from "../api/posts";
import type { PostType } from "../components/Post/Post";


export const useFetchPosts = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [isError,setIsError] = useState<string>("");
    const [data,setData] = useState<PostType[]>([]);

    const fetchPosts = async()=>{
        try {
        setIsLoading(true);
        const response = await getPosts();
        console.log("response",response); 
        setData(response.data);
        setIsLoading(false);
        setIsError("");
        }
        catch(e){
           if(e instanceof Error){
             setIsError(e.message);
           }
        }
    }
    useEffect(()=>{
  fetchPosts();
 },[]);
           
    
    return {isLoading,isError,data}
}