import type { Dispatch, SetStateAction } from "react"

 export type SwitchButtonType = {
     page?: number,
     setSave?: Dispatch<SetStateAction<boolean>>,
     setPage?: Dispatch<SetStateAction<number>>
 }

function LeftButton({page , setSave , setPage} : SwitchButtonType){
        const arrow = '<';

    const handleLeftButtonClick = ()=> {
        if (page || 0 > 1)
        {
            if (setSave && setPage) {
            setSave(false);
            setPage((prev)=> prev - 1)
            }
        }
    } 

    return (    
    <>
        <button onClick={handleLeftButtonClick}>{arrow}</button>
    </>
    )

}

export default LeftButton