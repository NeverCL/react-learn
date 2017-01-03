//lib
import { Router, Route, hashHistory, IndexRoute, browserHistory, Redirect } from 'react-router';
import React from 'react';
import DOM from 'react-dom';
import 'antd/dist/antd.css'
import './main.less'

//app
import App from './app';
import Hello from './hello';
import Profile from './profile/index.jsx';
import NotFound from './nofind/index.jsx';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Hello} />
        <Route path="profile" component={Profile} />
        {/* 404 */}
        <Route path='/404' component={NotFound} />
        {/* 其他重定向到 404 */}
        <Redirect from='*' to='/404' />
    </Route>
);

var root = document.createElement('div');
document.body.appendChild(root);

DOM.render((
    <Router history={hashHistory} routes={routes}>
    </Router>
), root);
