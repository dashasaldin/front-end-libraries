import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import MarkdownPage from './MarkdownPage';
import DrumMachine from './DrumMachine';
import JSCalculator from './JSCalculator';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path="/markdown" component={MarkdownPage} />
        <Route exact path="/drum-machine" component={DrumMachine} />
        <Route exact path="/js-calculator" component={JSCalculator}/>
    </Switch>
)

export default Routes;