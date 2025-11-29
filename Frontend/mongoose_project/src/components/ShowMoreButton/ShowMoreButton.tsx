import type { Dispatch, SetStateAction } from "react"

 export type ShowMoreButtonType = {
  setSave: Dispatch<SetStateAction<boolean>>,
     setPage: Dispatch<SetStateAction<number>>
 }


function ShowMoreButton({setSave , setPage} : ShowMoreButtonType){
      const handleClick = () => {
         setPage((prev) => prev + 1)
         setSave(true);
      }
    return (    
    <>
        <button onClick={()=>{
            handleClick();
        }}>Показать еще</button>
    </>
    )

}

export default ShowMoreButton