import React, {useEffect, useState} from 'react';
import './genresItem.css';
import {genresService} from "../../../services";
import {GenreLink} from "./GenreLink";

export const GenresItem = () => {

    const [state, setState] = useState([])

    const genresData = async () => {
        const {genres} = await genresService.getGenres();
        setState(genres);
    }

    useEffect(() => {
        genresData()
    }, [])


    return (
        <div>
            <div className={'genresSection'}>
                <h2>Choose your favorite genre of film</h2>
                {
                    state.map(value => <GenreLink props={value}/>)
                }
            </div>
        </div>
    )
}
