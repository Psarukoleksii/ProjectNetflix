import React from 'react';
import {useSelector} from "react-redux";
import {MovieItem} from "../MovieItem";

export const SavedFilms = () =>{

    const {wishFilms} = useSelector(({wishFilms})=> ({wishFilms}))
    return(
        <div>
            {
                wishFilms.wishFilms.map(items=> <MovieItem value={items}/>)
            }
        </div>
    )
}
