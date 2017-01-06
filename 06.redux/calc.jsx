import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const fn = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        default:
            return state - 1;
    }
}

const store = createStore(fn);

class Calc extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.value}</h2>
                <button onClick={this.props.addFn}>Add</button>
                <button onClick={this.props.delFn}>Del</button>
            </div>
        );
    }
}

const renderCalc = () => {
    render((
        <Calc value={store.getState()}
            delFn={store.dispatch({ type: 'del' })}
            addFn={store.dispatch({ type: 'add' })}></Calc>
    ), document.getElementById('root'))
}

renderCalc();
store.subscribe(renderCalc);