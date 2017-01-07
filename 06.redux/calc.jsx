// 本实例为redux 
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';


const fnCalc = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'del':
            return state - 1;
        default:
            return state;
    }
}

const fnCounter = (state = 0, action) => {
    switch (action.type) {
        case 'addCounter':
            return state + 1;
        case 'addCounterPromise':
            return state + action.text;
        case 'del'://2个del都会触发
            return state - 1;
        default:
            return state;
    }
}

const fn = combineReducers({ fnCalc, fnCounter });

const store = createStore(fn, applyMiddleware(promiseMiddleware, thunk, createLogger()));
// const store = createStore(fn, applyMiddleware(promiseMiddleware));

class Calc extends Component {
    render() {
        const {value, addFn, delFn} = this.props;
        let thread = 0;
        return (
            <div>
                <h2>{value}</h2>
                <button onClick={addFn}>Add</button>
                <button onClick={delFn}>Del</button>
                <button onClick={() =>
                    this.thread ?
                        clearInterval(this.thread) || (this.thread = 0) :
                        this.thread = setInterval(addFn, 1)
                }>看看你的手速</button>
            </div >
        );
    }
}


function Counter({value, addFn, delFn, addAsync, addPromise}) {
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={addFn}>Add</button>
            <button onClick={delFn}>Del</button>
            <button onClick={addAsync}>AddAsync</button>
            <button onClick={addPromise}>AddPromise</button>
        </div>
    );
}


const renderCalc = () => {
    let dispatch = store.dispatch;
    let getText = () => {
        return new Promise(resolve =>
            setTimeout(a => resolve({
                type: 'addCounterPromise',
                text: 1
            }), 1000)
        );
    }

    render((
        <div>
            <Calc value={store.getState().fnCalc}
                delFn={() => store.dispatch({ type: 'del' })}
                addFn={() => store.dispatch({ type: 'add' })}></Calc>

            <Counter value={store.getState().fnCounter}

                addAsync={() => store.dispatch((dispatch, getState) => setTimeout(() => {
                    dispatch({ type: 'addCounter' });
                    console.log(getState());
                }, 1000))}

                addPromise={() => store.dispatch((() => new Promise(resolve =>
                    setTimeout(a => resolve({
                        type: 'addCounterPromise',
                        text: 1
                    }), 1000)))())}//或者调用getText()

                delFn={() => store.dispatch({ type: 'del' })}
                addFn={() => store.dispatch({ type: 'addCounter' })}></Counter>
        </div >

    ), document.getElementById('root'))
}

renderCalc();
store.subscribe(renderCalc);