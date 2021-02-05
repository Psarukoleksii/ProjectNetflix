import './App.css';
import React from 'react';
import {BaseLayout} from "./layouts";
import {Home} from "./pages/home";
import {Switch, Route} from "react-router-dom";
import {MovieDetails} from "./pages/movieDetails";
import {SavedFilms} from "./components/savedFilms";
import {FilmSearch} from "./components/FilmSearch";
import {GenreFilms} from "./components/genresList/genreFilms";

function App() {


    return (
        <BaseLayout>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/movie/:id'} component={MovieDetails}/>
                <Route path={'/filmSearch'} component={FilmSearch}/>
                <Route path={'/wishFilms'} component={SavedFilms} />
                <Route path={'/genre/:id'} component={GenreFilms}/>
            </Switch>
        </BaseLayout>
    );
}

export default App;
