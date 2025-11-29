import type { Dispatch, SetStateAction } from "react";
import PaginationButton from "../PaginationButton/PaginationButton";

 export type PaginationButtonsType = {
     quantity :number,
     page: number,
     setSave: Dispatch<SetStateAction<boolean>>,
     setPage: Dispatch<SetStateAction<number>>
 }

function PaginationButtons({quantity , page , setSave, setPage} : PaginationButtonsType){
    const numberOfPages = [];
    for (let index = 1; index < quantity+1; index++) {
        numberOfPages.push(index);
    }
    return (    
    <>
        <div>
            {numberOfPages.map((p)=> <PaginationButton currentPage = {p} page = {page} setPage = {setPage} setSave = {setSave}/>)}
        </div>
    </>
    )
 
}

export default PaginationButtons