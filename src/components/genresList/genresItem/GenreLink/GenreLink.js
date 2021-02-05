import React from 'react';
import {Link} from "react-router-dom";
import './GenresLink.css';

export const GenreLink = ({props}) =>{
    return (
        <div className={'genreLink'}>
            <Link to={`/genre/${props.id}`}>{props.name}</Link>
        </div>
    )
}
