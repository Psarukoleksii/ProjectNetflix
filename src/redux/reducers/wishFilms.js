import {DELETE_FILM, WISH_FILM} from "../actions-type/actType";

const initialState = {
    wishFilms: [],
}

export const wishFilms = (state = initialState, action) =>{
    switch (action.type){
        case WISH_FILM:{
            let arr = [...state.wishFilms];
            arr.unshift(action.payload);
            return {...state, wishFilms: arr}
        }
        case DELETE_FILM:{
            let copyOfWishFilms = [...initialState.wishFilms];
            let filterWishFilms = copyOfWishFilms.filter((film)=> film.id !== action.payload.id)
            return {...state, wishFilms: filterWishFilms}
        }
        default:{
            return state
        }
    }
}
