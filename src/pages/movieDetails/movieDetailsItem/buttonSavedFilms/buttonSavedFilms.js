import React from 'react';

export const ButtonSavedFilms = ({handAddToWishFilms}) =>{
    return(
        <div>
            <button onClick={handAddToWishFilms}>Add film to Saved Films</button>
        </div>
    )
}
