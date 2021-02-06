import React, {useEffect, useState} from 'react';
import {MovieList} from "../../components/MovieList";
import {genresService, moviesService} from "../../services";
import {NumberPages} from "../NumberPages";
import {useDispatch, useSelector} from "react-redux";
import {setFilms} from "../../redux/action-creator/actCreators";
import './home.css';
import {GenresItem} from "../../components/genresList/genresItem";
import {Loading} from "../../components/Loading";
import {HomeItem} from "./homeItem";
import {PageNotFound} from "../pageNotFound";


export const Home = () => {
    const dispatch = useDispatch();
    const {filmsList} = useSelector(({films: {filmsList}}) => ({filmsList}))

    let [moviesData, setMoviesData] = useState(null);
    let [loading, setLoading] = useState(true);


    const fetchData = async (params) => {
        const {page, results, total_pages, total_results} = await moviesService.getAllMovies(params);
        setMoviesData({page, total_results, total_pages})
        setLoading(false);
        return results;
    }

    const genresData = async () => {
        const {genres} = await genresService.getGenres();
        return genres;
    }

    const fetchMoviesData = async (movieParams) => {
        const [movies, genres] = await Promise.all([fetchData(movieParams), genresData()])
        const mapMovies = movies.map(movie => {
            const {genre_ids} = movie;
            const xxx = genre_ids.map(genreId => genres.find(el => el.id === genreId));
            return {
                ...movie,
                xxx
            }
        })
        dispatch(setFilms(mapMovies));
        setLoading(false)
    }

    useEffect(() => {
        fetchMoviesData()
    }, [])

    const handChangePage = (page) => {
        fetchMoviesData({page})
    }


    const icoLoading = loading ? <Loading /> : null;
    const listFilm = filmsList ? <HomeItem handChangePage={handChangePage} moviesData={moviesData} filmsList={filmsList}/> : null;

    return (
        <div>
            {icoLoading}
            {listFilm}
        </div>

    )
}
