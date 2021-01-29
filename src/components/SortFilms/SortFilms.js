import React, {useEffect, useState} from 'react';
import {genresService} from "../../services";
import {SortItem} from "./SortItem";

export const SortFilms = () =>{

    const [state, setState] = useState([])

    const handGenresList = async () =>{
        const {genres} = await genresService.getGenres();
        setState(genres)
    }

    useEffect(()=>{
        handGenresList()
    }, [])

    const result = state.map(value=> value.name)

    return (
        <div>
            {
                result.map(value=> <SortItem item={value}/>)
            }
        </div>
    )
}
