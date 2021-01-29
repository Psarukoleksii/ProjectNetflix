import React from 'react';
import {useDispatch} from "react-redux";
import {moviesService} from "../../../services";
import {toFindFilm} from "../../../redux/action-creator/actCreators";
import './formSearch.css';

export const FormSearch = () =>{
    const dispatch = useDispatch();

    const handFindFilm = async (e) =>{
        e.preventDefault();
        const filmSearch = e.target[0].value;
        const filmsListForFilter = await moviesService.getAllMovies();
        const data = filmsListForFilter.results.filter((value)=> value.original_title === filmSearch);
        e.target[0].value = '';
        dispatch(toFindFilm(data))
    }

    return(
        <div className={'form-wrapper'}>
            <div className={'form-item'}>
                <form onSubmit={handFindFilm}>
                    <input type="text"/>
                    <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzljVszZUDkHXBtnICfsL6V1L3ht6cgWMlQ&usqp=CAU" alt="searchIco"/></button>
                </form>
            </div>
        </div>
    )
}
