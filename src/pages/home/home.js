import React, {useEffect, useState} from 'react';
import {MovieList} from "../../components/MovieList";
import {genresService, moviesService} from "../../services";
import {NumberPages} from "../NumberPages";
import {useDispatch, useSelector} from "react-redux";
import {setFilms} from "../../redux/action-creator/actCreators";
import './home.css';
import {SortFilms} from "../../components/SortFilms";


export const Home = () => {
    const dispatch = useDispatch();
    const {filmsList} = useSelector(({films: {filmsList}}) => ({filmsList}))
    const {findFilm} = useSelector(({films: {findFilm}}) => ({findFilm}))

    let [moviesData, setMoviesData] = useState(null);


    const fetchData = async (params) => {
        const {page, results, total_pages, total_results} = await moviesService.getAllMovies(params);
        setMoviesData({page, total_results, total_pages})
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
    }

    useEffect(() => {
        fetchMoviesData()
    }, [])


    const handChangePage = (page) => {
        fetchMoviesData({page})
    }

    const data = findFilm.length === 1 ? <MovieList items={findFilm} key={findFilm.id}/> :
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


    return (
        <div className={'flex-container'}>
            <div>
                <SortFilms />
            </div>
            {data}
        </div>
    )
}
