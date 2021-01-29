import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {moviesService} from "../../services";
import './movieDetails.css'
import {Comments} from "./comments";

export const MovieDetails = () => {
    const {id} = useParams();
    const [oneMovie, setOneMovie] = useState([]);


    const getOneMovie = async () => {
        const data = await moviesService.getMovieById(id);
        console.log(data);
        setOneMovie(data);
    }

    useEffect(() => {
        getOneMovie()
    }, [])


    return (
        <div className={'detailsSection'}>
            <div className={'detailsOfMovieInformation'}>
                <h2>{oneMovie.original_title}</h2>
                <p>Release Date: {oneMovie.release_date}</p>
                <p>{oneMovie.production_countries !== undefined && oneMovie.production_countries.map(value =>
                    <span> {value.name}, </span>)}
                    <span>{oneMovie.genres !== undefined && oneMovie.genres.map(value =>
                        <span>{value.name}, </span>)}</span>
                    <span><img src="https://image.freepik.com/free-icon/stopwatch_318-1803.jpg"
                               alt=""/>{oneMovie.runtime} min.</span>
                </p>

            </div>
            <div className={'detailsOfMoviePhoto'}>
                <img src={`https://image.tmdb.org/t/p/w300${oneMovie.backdrop_path}`} alt=""/>
            </div>
            <div className={'details-wrapper'}>
                <div className={'details-average'}>
                    <p>Average: {oneMovie.vote_average} of 10</p>
                </div>
                <div className={'details-poster'}>
                    <p>
                        {oneMovie.overview}
                    </p>
                </div>
            </div>
            <div className={'commentsSection'}>
                <p>What do you think about this film?</p>
                <Comments/>
            </div>

        </div>
    )
}
