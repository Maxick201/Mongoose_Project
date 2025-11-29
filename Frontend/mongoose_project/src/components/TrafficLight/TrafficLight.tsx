import { useEffect, useState } from "react"
import Circle from "../Circle/Circle"


function TrafficLight(){
    const [color,setColor] = useState("red");
    useEffect(()=>{
        const timer = setTimeout(() => {
            switch(color)
            {
                case "red":
                    setColor("yellow");
                    break;
                case "yellow":
                    setColor("green");
                    break;
                case "green":
                    setColor("red");
                    break;
            }
        }, 1000);
        return () => clearTimeout(timer)
    }, [color])
    return (
        <>
        <div style={{borderRadius: "100px",
             backgroundColor: "#3d3d3d",
             padding:"12px"
      }}>
            <Circle color={color === "red" ? "red" : "gray"}/>
            <Circle color={color === "yellow" ? "yellow" : "gray"}/>
            <Circle color={color === "green" ? "green" : "gray"}/>
        </div>
        </>
    )
}

export default TrafficLight