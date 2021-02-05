import React from 'react';
import {GenresItem} from "../../../components/genresList/genresItem";
import {MovieList} from "../../../components/MovieList";
import {NumberPages} from "../../NumberPages";

export const HomeItem = ({moviesData, handChangePage, filmsList}) =>{
    return (
        <div className={'flex-container'}>
            <div>
                <GenresItem />
            </div>
            <div>
                <MovieList items={filmsList} key={filmsList.id}/>;
                {
                    moviesData && <NumberPages
                        currentPage={moviesData.page}
                        totalPages={moviesData.total_pages}
                        onPrevClick={handChangePage}
                        onNextClick={handChangePage}
                        onFirstPage={handChangePage}
                        onLastPage={handChangePage}
                    />
                }
            </div>
        </div>
    )
}
