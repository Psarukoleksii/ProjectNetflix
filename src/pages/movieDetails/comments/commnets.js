import React, {useState} from 'react';
import {CommentItem} from "./commentItem";
import './comments.css';

export const Comments = () =>{
    
    const [state, setState] = useState([])
    
    const handAddComment = (e) =>{
        e.preventDefault();
        const userName = e.target[0].value;
        const userComment = e.target[1].value;
        e.target[0].value = '';
        e.target[1].value = '';
        const user = {
            name: userName,
            comment: userComment
        }
        setState(()=>{
            const state1 = [...state];
            state1.unshift(user)
            return state1
        })
    }

    console.log(state.map(value=> value.name));

    return(
        <div className={'form-section-for-comments'}>
            <div>
                <form onSubmit={handAddComment}>
                    Your Name: <input type="text" />
                    What do you think about this film? <input type="text"/>
                    <button>Send Comment</button>
                </form>
            </div>
            <div>
                {
                    state.map(value=> <CommentItem props={value}/>)
                }
            </div>
        </div>
    )
}
