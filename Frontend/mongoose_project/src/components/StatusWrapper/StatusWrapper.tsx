import type React from "react";


export type StatusWrapperType = {
    isLoading :boolean,
    isError : string,
    children : React.ReactNode

}

function StatusWrapper({isLoading , isError , children} : StatusWrapperType ){
    if(isError)
    {
        return <h2>Возникла ошибка</h2>;
    }else if (isLoading) {
        return <h2>Идет загрузка...</h2>;
    }
    return (
        <>
            {children}
        </>
    )
}

export default StatusWrapper