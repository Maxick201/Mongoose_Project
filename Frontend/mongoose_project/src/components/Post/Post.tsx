import "../Post/Post.scss";
export type PostType =  {
    userId:number,
    Id:number,
    body:string,
    title:string
}
function Post({userId,Id,body,title}:PostType){
    return (
        <>
        <div className="post">
            <p>ID : {Id}</p>
            <p>BODY : {body}</p>
            <p>TITLE : {title}</p>
            <p>USER_ID : {userId}</p>
        </div>
        </>
    )
}

export default Post