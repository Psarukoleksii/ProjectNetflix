import React from 'react';
import {MovieItem} from "../MovieItem";
import './movieList.css'

export const MovieList = ({items}) =>{
    return (
        <div className={'asd'}>
            {
                items.map((item)=> <MovieItem key={item.id} value={item}/>)
            }
        </div>
    )
}
