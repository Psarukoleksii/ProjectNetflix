import React from 'react';

export const ButtonDeleteFromSaved = ({handDeleteFilmFromWishList}) =>{
    return(
        <div>
            <button onClick={handDeleteFilmFromWishList}>Delete film from Saved Films</button>
        </div>
    )
}
