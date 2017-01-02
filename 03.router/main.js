import React, { Component } from 'react';
import DOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

class Hello extends Component {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

class World extends Component {
    render() {
        return (
            <h1>World{this.props.params.id}</h1>
        )
    }
}


DOM.render((
    <Router history={hashHistory}>{/*路由的切换由URL的hash变化决定*/}
        <Route path="/" component={Hello} />
        <Route path="/world">
            <IndexRoute component={Hello} />
        </Route>
        <Route path="/app/:id" component={World} />
    </Router>
), document.getElementById('root'));
