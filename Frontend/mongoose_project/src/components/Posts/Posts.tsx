import type { PostType } from "../Post/Post"
import Post from "../Post/Post"


export type PostsType =  {
    posts:PostType[] 
}

function Posts({posts}:PostsType){
    return (
        <>
        <div>
            {posts.map((p)=> <Post {...p} key={p.Id}/>)}
        </div>
        </>
    )
}

export default Posts