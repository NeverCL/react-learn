import React, { Component } from 'react';
import { render } from 'react-dom';
import store from './index';

const Hello = ({name}) => (
    <div>Hello Component {name} </div>
)

function Home({name}) {
    return <div>Hello Home Component {name}</div>
}

class App extends Component {
    render() {
        let input = {
            value: ''
        };
        return (
            <div>
                hello world {this.props.name}
                <input type="text" ref={node => input = node} />
                <button onClick={x => alert(input.value)}>Click</button>
            </div>
        );
    }
}

render((
    <div>
        <Hello name="hello-name"></Hello>
        <Home name="home-name"></Home>
        <App name="app-name"></App>
    </div>
), document.getElementById('root').appendChild(document.createElement('div')));


export default App;