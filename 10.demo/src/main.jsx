import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducers from 'reducers';

class Main extends Component {
    render() {
        return (
            <div>
                hello world
            </div>
        );
    }
}

export default Main;

let store = createStore((state) => state);

render((
    <Provider store={store}>
        <Main></Main>
    </Provider>
), document.getElementById('root'));

