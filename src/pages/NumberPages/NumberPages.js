import React from 'react';
import './NumberPages.css';

export const NumberPages = ({currentPage, totalPages, onNextClick, onPrevClick, onFirstPage, onLastPage}) =>{

    const handNextClick = () =>{
        if(currentPage + 1 < totalPages){
            onNextClick && onNextClick(currentPage + 1)
        }
    }

    const handPrevClick = () =>{
        if(currentPage -1 > 0){
            onPrevClick && onPrevClick(currentPage - 1);
        }
    }

    const handFirstPage = () =>{
        onFirstPage && onFirstPage(currentPage = 1);
    }

    const handLastPage = () =>{
        onLastPage && onLastPage(currentPage = totalPages);
    }


    return(
        <div className={'numberPagesSection'}>
            <div className={'numberPagesItem'}>
                <button onClick={handFirstPage}>First page</button>
                <button onClick={handPrevClick}>Prev Page</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={handNextClick}>Next Page</button>
                <button onClick={handLastPage}>Last page</button>
            </div>
        </div>
    )
}
