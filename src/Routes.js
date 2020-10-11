import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import MarkdownPage from './MarkdownPage';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path="/markdown" component={MarkdownPage} />
    </Switch>
)

export default Routes;