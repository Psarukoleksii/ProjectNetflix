import {combineReducers} from "redux";
import {films} from "./films";
import {wishFilms} from "./wishFilms";


export const reducer = combineReducers({
    films,
    wishFilms
})
