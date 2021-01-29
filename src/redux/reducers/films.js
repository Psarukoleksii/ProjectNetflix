import {FIND_FILM, SET_FILMS} from "../actions-type/actType";

const initialState = {
    filmsList: [],
    findFilm: [],
}

export const films = (state=initialState, action)=>{
    switch (action.type){
        case SET_FILMS:{
            return {...state, filmsList: action.payload}
        }
        case FIND_FILM:{
            return {...state, findFilm: action.payload}
        }
        default:{
            return state;
        }
    }
}
