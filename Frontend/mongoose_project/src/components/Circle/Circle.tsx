export type ColorType = "yellow" | "red" | "green"| "gray";
export type CircleType =  {
    color:ColorType
}

function Circle({color}:CircleType){
    return (
        <>
        <div style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: color,
        margin: "8px auto",
      }}>

        </div> 
        </>
    )
}

export default Circle