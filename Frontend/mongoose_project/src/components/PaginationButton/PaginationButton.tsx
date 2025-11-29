import type { Dispatch, SetStateAction } from "react"
import cx from "classnames";
import "./PaginationButton.scss"

 export type PaginationButtonType = {
     page :number,
     currentPage: number,
     setSave: Dispatch<SetStateAction<boolean>>,
     setPage: Dispatch<SetStateAction<number>>
 }

function PaginationButton({page , currentPage , setSave,  setPage} : PaginationButtonType){
    console.log(page, currentPage);
    const handlePaginationButtonClick = ()=>onPaginationButton();
     const onPaginationButton = ()=> {
         setPage(currentPage);
         setSave(false)
     }


    return (    
    <>
        <button onClick={handlePaginationButtonClick} className={cx("paginationbtn",{active:page===currentPage})}>{currentPage}</button>
        
    </>
    )

}

export default PaginationButton