import React from 'react';
import {Link} from "react-router-dom";
import './movieItem.css';
import good from './GOOD.png';
import top from './TOP.png';
import notGood from './NOTGOOD.png';

export const MovieItem = ({value}) => {
    let {original_title, poster_path, vote_average} = value;

    const voteAverageTOP = vote_average >= 7 ? <img src={top} alt="TopAverage" /> : null;
    const voteAverageGOOD = vote_average < 7 && vote_average >= 4 ? <img src={good} alt="GoodAverage" /> : null;
    const voteAverageNOTGOOD = vote_average < 4 && vote_average > 0 ? <img src={notGood} alt="NotGoodAverage" /> : null;
    const notVoteAverage = vote_average === 0 ? null : null

    return (
        <div className={'film-item'}>
            <div className={'film-kard-img'}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`Poster of ${original_title}`}/>
            </div>
            <div className={'film-kard-text'}>
                <h2>{original_title}</h2>
                {voteAverageGOOD}
                {voteAverageTOP}
                {voteAverageNOTGOOD}
                {notVoteAverage}
            </div>
            <Link to={`/movie/${value.id}`}>Details of film</Link>
        </div>
    )
}
