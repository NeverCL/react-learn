import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, dispatch, combineReducers } from 'redux';

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

const delTodo = (id) => {
    return {
        type: 'DEL_TODO',
        id
    }
}

const defaultState = ['tes', 'ar', 'heh'];

const addReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DEL_TODO':
            let state2 = state.splice(state.indexOf(action.id), 1);
            console.log('del' + action.id + ':' + state);
            return [...state];
        default:
            return state;
    }
}

const delReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DEL_TODO':
            let state2 = state.splice(state.indexOf(action.id), 1);
            console.log('del' + action.id + ':' + state);
            return [...state];
        default:
            return state;
    }
}

const reducers = combineReducers({
    addReducer, delReducer});

const store = createStore(reducers);

// let App = ({todos, onClick, onDel}) =>
class App extends Component {
    render() {
        let node;
        let id = 0;
        let todos = this.props.todos;
        let onDel = this.props.onDel;
        let onClick = this.props.onClick;
        return (
            <div>
                <ul>
                    {todos.map(todo => {
                        return <li key={id++} onClick={x => onDel(x.target.innerText)}>{todo}</li>
                    })}
                </ul>
                <input type="text" ref={input => node = input} />
                <button onClick={x => onClick(node.value)}>Add Todo</button>
            </div>

        );
    }
}

const mapStateToProps = (state, prop) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: (text) => {
            dispatch(addTodo(text))
        },
        onDel: (id) => {
            dispatch(delTodo(id))
        }
    }
}


const Hello = connect(mapStateToProps, mapDispatchToProps)(App);

render((
    <Provider store={store}>
        <Hello></Hello>
    </Provider>
), document.getElementById('root'));