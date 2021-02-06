import React from 'react';
import {useSelector} from "react-redux";
import {MovieItem} from "../MovieItem";
import {PageNotFound} from "../../pages/pageNotFound";

export const SavedFilms = () =>{

    const {wishFilms} = useSelector(({wishFilms})=> ({wishFilms}))

    const saveFilms = wishFilms.wishFilms.length >= 1 ? wishFilms.wishFilms.map(items=> <MovieItem value={items}/>) : <PageNotFound />
    return(
        <div>
            {saveFilms}
        </div>
    )
}
