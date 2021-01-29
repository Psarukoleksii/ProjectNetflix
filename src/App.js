import './App.css';
import React from 'react';
import {BaseLayout} from "./layouts";
import {Home} from "./pages/home";
import {Switch, Route} from "react-router-dom";
import {MovieDetails} from "./pages/movieDetails";

function App() {


    return (
        <BaseLayout>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/movie/:id'} component={MovieDetails}/>
            </Switch>
        </BaseLayout>
    );
}

export default App;
