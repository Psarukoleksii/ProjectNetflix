import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {moviesService} from "../../services";
import './movieDetails.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteFilm, wishFilm} from "../../redux/action-creator/actCreators";
import {success} from "../../config";
import {Loading} from "../../components/Loading";
import {MovieDetailsItem} from "./movieDetailsItem";

export const MovieDetails = () => {
    const {id} = useParams();
    const [oneMovie, setOneMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [button, setButton] = useState(true);

    const getOneMovie = async () => {
        const data = await moviesService.getMovieById(id);
        setLoading(false);
        setOneMovie(data);
    }

    useEffect(() => {
        getOneMovie()
        isFilmInWishFilms()
    }, [])


    const {wishFilms} = useSelector(({wishFilms})=> ({wishFilms}));
    const isFilmInWishFilms = () =>{
        const asd = wishFilms.wishFilms.map(value=> value.id)
        for(let elem of asd){
            if(elem == id){
                setButton(false);
            }
        }
    }

    const handAddToWishFilms = async () => {
        const data = await moviesService.getMovieById(id);
        dispatch(wishFilm(data));
        setLoading(false);
        success();
        setButton(false);
    }

    const handDeleteFilmFromWishList = (film) => {
        dispatch(deleteFilm(film));
        setButton(true);
        success();
    }

    const icoLoading = loading ? <Loading/> : null;
    const detailsOfMovie = !loading ? <MovieDetailsItem oneMovie={oneMovie} handAddToWishFilms={handAddToWishFilms}
                                                        handDeleteFilmFromWishList={handDeleteFilmFromWishList}
                                                        button={button}/> : null;
    return (
        <div>
            {icoLoading}
            {detailsOfMovie}
        </div>
    )
}
