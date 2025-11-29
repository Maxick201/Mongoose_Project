/* eslint-disable */
import { useContext } from "react";
import "../Post/Post.scss";
import { PostContext } from "../CartContext/PostContext";
export type PostType =  {
    userId:number,
    id:number,
    body:string,
    title:string
}
function Post({userId,id,body,title}:PostType){
    // const {value,setPost} = {value:1,setPost:1}
    // console.log(value);
   
    const  {posts,setPosts} = useContext(PostContext);
    const handleClick = (p : PostType)=>{
        setPosts((prev : PostType[]) => [...prev, p]);
    }

    return (
        <>
        <div className="post">
            <p>ID : {id}</p>
            <p>BODY : {body}</p>
            <p>TITLE : {title}</p>
            <p>USER_ID : {userId}</p>
            <button onClick = {()=>{handleClick({userId,id,body,title})}} className="addCartBtn" >Add to cart</button>
        </div>
        </>
    )
}

export default Post