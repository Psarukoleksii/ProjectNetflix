import React from 'react';
import {useSelector} from "react-redux";
import {MovieList} from "../MovieList";
import {PageNotFound} from "../../pages/pageNotFound";


export const FilmSearch = () =>{
    const {findFilm} = useSelector(({films: {findFilm}}) => ({findFilm}));

    const goodSearch = findFilm.length >= 1 ? <MovieList items={findFilm}/> : <PageNotFound />;
    return(
        <div>
            {goodSearch}
        </div>
    )
}
