import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {moviesService} from "../../../services";
import {toFindFilm} from "../../../redux/action-creator/actCreators";
import './formSearch.css';
import {Link} from "react-router-dom";
import icoSearch from './icoSearch.png';

export const FormSearch = () => {
    const dispatch = useDispatch();
    const inputEl = useRef(null);

    const handFindFilm = async () => {
        const filmSearch = inputEl.current.value;
        const filmsListForFilter = await moviesService.getAllMovies();
        const data = filmsListForFilter.results.filter((value) => value.original_title === filmSearch);
        inputEl.current.value = '';
        dispatch(toFindFilm(data))
    }


    return (
        <div className={'form-wrapper'}>
            <div className={'form-item'}>
                <form>
                    <input type="text" ref={inputEl}/>
                    <Link to={'/filmSearch'} onClick={handFindFilm}><img
                        src={icoSearch}
                        alt="searchIco"/></Link>
                </form>
            </div>
        </div>
    )
}
