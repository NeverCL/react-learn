// 本实例为redux 
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';

const fnCalc = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            console.log('fnCalc');
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
            console.log('fnCounter');
            return state + 1;
        case 'del'://2个del都会触发
            return state - 1;
        default:
            return state;
    }
}

const fn = combineReducers({ fnCalc, fnCounter });

const store = createStore(fn, {
    fnCalc: 0,
    fnCounter: 1
});

class Calc extends Component {
    render() {
        const {value, addFn, delFn} = this.props;
        return (
            <div>
                <h2>{value}</h2>
                <button onClick={addFn}>Add</button>
                <button onClick={delFn}>Del</button>
            </div>
        );
    }
}


function Counter({value, addFn, delFn}) {
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={addFn}>Add</button>
            <button onClick={delFn}>Del</button>
        </div>
    );
}

const renderCalc = () => {
    render((
        <div>
            <Calc value={store.getState().fnCalc}
                delFn={() => store.dispatch({ type: 'del' })}
                addFn={() => store.dispatch({ type: 'add' })}></Calc>

            <Counter value={store.getState().fnCounter}
                delFn={() => store.dispatch({ type: 'del' })}
                addFn={() => store.dispatch({ type: 'addCounter' })}></Counter>
        </div>

    ), document.getElementById('root'))
}

renderCalc();
store.subscribe(renderCalc);