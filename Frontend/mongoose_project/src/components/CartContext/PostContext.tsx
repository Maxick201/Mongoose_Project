/* eslint-disable react-refresh/only-export-components */
import { createContext,  useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import type { PostType } from "../Post/Post"

 export type PostProviderType = {
    posts : PostType[],
    setPosts: Dispatch<SetStateAction<PostType[]>>
 }
 export type PostContextProviderType = {
    children:ReactNode
 }
export const PostContext = createContext<PostProviderType>({posts:[],setPosts:()=>{}})

export const PostContextProvider = ({children}:PostContextProviderType)=> {
    const [posts,setPosts] = useState<PostType[]>([]);
    return (
         <PostContext.Provider value={{posts:posts,setPosts:setPosts}}>
            {children}
         </PostContext.Provider>
    );
};
