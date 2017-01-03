//lib
import { Router, Route, hashHistory, IndexRoute, browserHistory, Redirect } from 'react-router';
import React from 'react';
import DOM from 'react-dom';
import 'antd/dist/antd.css'
import './main.less'

//app
// import App from './app';
// import Hello from './hello';
// import Profile from './profile/index.jsx';
// import NotFound from './nofind/index.jsx';

// const routes = (
//     <Route path="/" component={App}>
//         <IndexRoute component={Hello} />
//         <Route path="profile" component={Profile} />
//         {/* 404 */}
//         <Route path='/404' component={NotFound} />
//         {/* 其他重定向到 404 */}
//         <Redirect from='*' to='/404' />
//     </Route>
// );

const rootRoutes = {
    path: '/',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], require => cb(null, require('./hello.jsx')), 'hello')
        }
    },
    getComponent(nextState, cb) {
        require.ensure([], require => cb(null, require('./app.jsx').default), 'app')
    },
    childRoutes: [
        {
            path: 'profile',
            getComponent(nextState, cb) {
                require.ensure([], require => cb(null, require('./profile/profile.jsx').default), 'profile')
            }
        }
    ],
};


DOM.render((
    <Router history={browserHistory} routes={rootRoutes} />
), document.body.appendChild(document.createElement('div')));
