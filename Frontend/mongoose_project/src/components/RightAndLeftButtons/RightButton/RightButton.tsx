import type { Dispatch, SetStateAction } from "react"

 export type SwitchButtonType = {
     page: number,
     setSave: Dispatch<SetStateAction<boolean>>,
     setPage: Dispatch<SetStateAction<number>>
 }

function RightButton({page , setSave , setPage} : SwitchButtonType){
    const arrow = '>';
    const handleRightButtonClick = ()=> {
        if (page < 10)
        {
            setSave(false);
            setPage((prev)=> prev + 1)
        }
    } 

    return (    
    <>
        <button onClick={handleRightButtonClick}>{arrow}</button>
    </>
    )

}

export default RightButton