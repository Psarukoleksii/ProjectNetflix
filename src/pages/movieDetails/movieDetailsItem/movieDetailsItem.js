import React from 'react';
import {Comments} from "../comments";
import './movieDetailsItem.css';
import {ButtonSavedFilms} from "./buttonSavedFilms";
import {ButtonDeleteFromSaved} from "./buttonDeleteFromSaved";
import icoTimer from './icoTimer.png'

export const MovieDetailsItem = ({oneMovie, handAddToWishFilms, handDeleteFilmFromWishList, button}) => {

    const buttonPosition = button ? <ButtonSavedFilms handAddToWishFilms={handAddToWishFilms}/> :
        <ButtonDeleteFromSaved handDeleteFilmFromWishList={handDeleteFilmFromWishList}/>;

    return (
        <div className={'detailsSection'}>
            <div className={'detailsOfMovieInformation'}>
                <h2>{oneMovie.original_title}</h2>
                <p>Release Date: {oneMovie.release_date}</p>
                <p>{oneMovie.production_countries !== undefined && oneMovie.production_countries.map(value =>
                    <span> {value.name}, </span>)}
                    <span>{oneMovie.genres !== undefined && oneMovie.genres.map(value =>
                        <span>{value.name}, </span>)}</span>
                    <span><img src={icoTimer}
                               alt="timer"/>{oneMovie.runtime} min.</span>
                </p>
            </div>
            <div className={'detailsOfMoviePhoto'}>
                <img src={`https://image.tmdb.org/t/p/w300${oneMovie.backdrop_path}`} alt="ImageFilm"/>
            </div>
            <div className={'details-wrapper'}>
                <div className={'details-average'}>
                    <p>Average: {oneMovie.vote_average} of 10</p>
                    {buttonPosition}
                </div>
                <div className={'details-poster'}>
                    <p>
                        {oneMovie.overview}
                    </p>
                </div>
            </div>
            <div className={'commentsSection'}>
                <h3>What do you think about this film?</h3>
                <Comments/>
            </div>
        </div>
    )
}
