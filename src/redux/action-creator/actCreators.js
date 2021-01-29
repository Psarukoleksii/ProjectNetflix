import {FIND_FILM, SET_FILMS} from "../actions-type/actType";

export const setFilms = (films) =>({
    type: SET_FILMS,
    payload: films,
})

export const toFindFilm = (film) =>({
    type: FIND_FILM,
    payload: film,
})
