import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {moviesService} from "../../../services";
import {MovieList} from "../../MovieList";
import {Loading} from "../../Loading";
import {PageNotFound} from "../../../pages/pageNotFound";

export const GenreFilms = () =>{
    const {id} = useParams();

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)

    const handGetAllFilms = async () =>{
        const {results} = await moviesService.getAllMovies();
        const wishFilmsWithGenres = results.filter(x => x.genre_ids.some(y => y === Number.parseInt(id)))
        setState(wishFilmsWithGenres);
        setLoading(false)
    }

    useEffect(()=>{
        handGetAllFilms()
    }, [state])


    const icoLoading = loading ? <Loading /> : null
    const filmsWithWishGenres = !loading ? <MovieList items={state}/> : null;
    const filmsNotFound = state.length === 0 && !loading ? <PageNotFound /> : null;
    return(
        <div>
            {filmsNotFound}
            {icoLoading}
            {filmsWithWishGenres}
        </div>
    )
}
