import React from 'react';
import {useSelector} from "react-redux";
import {MovieList} from "../MovieList";


export const FilmSearch = () =>{
    const {findFilm} = useSelector(({films: {findFilm}}) => ({findFilm}));
    return(
        <div>
            <MovieList items={findFilm}/>
        </div>
    )
}
