import React from 'react';
import './header.css';
import {FormSearch} from "./formSearch";
import {Link} from "react-router-dom";
import icoSaved from './icoSaved.png';

export const Header = () =>{

    return (
        <div className={'headerSection'}>
            <div className={'icoHeader'}>
                <Link to={'/'}>NETFLIX</Link>
            </div>
            <div className={'formSection'}>
                <div className={'formSectionItem'}>
                    <FormSearch />
                </div>
                <div className={'savedFilmsSection'}>
                    <Link to={'/wishFilms'}><img src={icoSaved} alt="icoSaved"/></Link>
                </div>
            </div>
        </div>
    )
}
