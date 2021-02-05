import React from 'react';
import styles from './BaseLayout.module.css';
import {Header} from "../components/header";
import {Footer} from "../components/footer";


export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
