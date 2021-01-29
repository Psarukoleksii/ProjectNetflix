import React from 'react';
import './commentItem.css'

export const CommentItem = ({props}) =>{

    return(
        <div className={'commentsList'}>
            <div className={'comment-item-photo'}>
                <img src="https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-16.jpg" alt=""/>
            </div>
            <div className={'comment-item-info'}>
                <h2>{props.name}</h2>
                <p>
                    {props.comment}
                </p>
            </div>
        </div>
    )
}
