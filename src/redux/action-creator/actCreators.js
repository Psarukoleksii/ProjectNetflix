import {DELETE_FILM, FIND_FILM, SET_FILMS, WISH_FILM} from "../actions-type/actType";

export const setFilms = (films) =>({
    type: SET_FILMS,
    payload: films,
})

export const toFindFilm = (film) =>({
    type: FIND_FILM,
    payload: film,
})

export const wishFilm = (film) =>({
    type: WISH_FILM,
    payload: film
})

export const deleteFilm = (film) =>({
    type: DELETE_FILM,
    payload: film
})
