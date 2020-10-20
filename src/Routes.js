import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import MarkdownPage from './MarkdownPage';
import DrumMachine from './DrumMachine';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path="/markdown" component={MarkdownPage} />
        <Route exact path="/drum-machine" component={DrumMachine} />
    </Switch>
)

export default Routes;