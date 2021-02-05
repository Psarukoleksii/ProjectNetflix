import React from 'react';
import './footer.css';
import icoGit from './icoGit.png';
import icoInst from './icoInst.png';


export const Footer = () => {
    return (
        <div className={'footerWrapper'}>
            <div className={'footerIcons'}>
                <a href="https://github.com/Psarukoleksii"><img src={icoGit} alt="icoGit"/></a>
                <a href="https://www.instagram.com/oleksiy_psaruk/"><img src={icoInst} alt="icoInst"/></a>
            </div>
            <div className={'footerInfo'}>
                <p>
                    Design by Oleksii Psaruk &#169; 2021
                </p>
            </div>
        </div>
    )
}
