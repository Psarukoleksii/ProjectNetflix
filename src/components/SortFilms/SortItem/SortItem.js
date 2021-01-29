import React from 'react';

export const SortItem = ({item}) =>{
    return(
        <div>
            <form>
                <input type="checkbox" value={item} id={item}/>
                <label htmlFor={item}>{item}</label>
            </form>
        </div>
    )
}
