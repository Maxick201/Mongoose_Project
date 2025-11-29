import { useEffect, useState } from "react"

import { getPosts } from "../api/posts";
import type { PostType } from "../components/Post/Post";


export const useFetchPosts = (page ?: number, limit ?: number , save?:boolean) => {
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [isError,setIsError] = useState<string>("");
    const [data,setData] = useState<PostType[]>([]);

    const fetchPosts = async()=>{
        try {
        setIsLoading(true);
        const response = await getPosts(page ,limit );
        console.log("response",response); 
        if(save){
           setData((prev)=>[...prev,...response.data]);
        }
        else {
        setData(response.data);
        }
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
 },[page,save]);
           
    
    return {isLoading,isError,data}
}