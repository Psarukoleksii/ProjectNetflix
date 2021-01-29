import React from 'react';
import './header.css';
import {FormSearch} from "./formSearch";

export const Header = () =>{


    return (
        <div className={'headerSection'}>
            <div className={'icoHeader'}>
                <a href="/"><img src="https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg" alt=""/></a>
                <a href="/"><h1>NETFLIX</h1></a>
            </div>
            <div className={'formSection'}>
                <FormSearch />
            </div>
        </div>
    )
}
