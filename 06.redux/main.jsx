import React, { Component } from 'react';
import DOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

const fn = (state = 0, action) => {//reducer
    let {type, text} = action;
    switch (type) {
        case 'add':
            return state + text;
        default:
            return state;
    }
}

const store = createStore(fn);  //store

const addCreator = text => { return { type: 'add', text }; }; //actionCreator

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 onClick={this.props.add}>Hello</h1>
                <h2>{this.props.value}</h2>
            </div >
        );
    }
}

var root = document.createElement('div');
document.body.appendChild(root);

const render = () => DOM.render((
    <App value={store.getState()}
        add={() => store.dispatch(addCreator(1))}>
    </App>
), root);

render();

store.subscribe(render);


