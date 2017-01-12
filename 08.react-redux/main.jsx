//本例
//1. Calc为UI组件
//2. App为容器组件
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { connect, Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const Calc = props => (
    <div>
        <h1>{props.value}</h1>
        <button onClick={props.addFn}>Add</button>
        <button onClick={props.delFn}>Del</button>
        <button onClick={() => setInterval(props.addFn, 500)}>Interval</button>
    </div>
);

const mapState = (state, prop) => ({
    value: state
});

const mapDispatcher = {
    addFn: () => ({
        type: 'add'
    }),
    delFn: () => ({
        type: 'del'
    }),
};

const mapDispatcher2 = (dispatch, prop) => ({
    addFn: () => dispatch({ type: 'add' }),
    delFn: () => dispatch({ type: 'del' })
})

const App = connect(mapState, mapDispatcher2)(Calc);

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'del':
            return state - 1;
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(mySaga);

const Root = ({store}) => (
    <Provider store={store}>
        <App></App>
    </Provider>
);

render((//也可以使用Root
    <Provider store={store}>
        <App></App>
    </Provider>
), document.getElementById('root'));