import React, { Component } from 'react';

import { render } from 'react-dom';

let num = 0;
let func = () => ++num;

class App extends Component {
    constructor() {
        super();
    }

    render() {
        const {name} = this.props;
        return (
            <div>
                hello {name} {func()}
            </div>
        );
    }
}


class Hello extends Component {
    constructor() {
        super();
        this.state = {
            num: 1
        };
    }

    render() {
        return (
            <div>
                {this.props.children} {this.state.num}
                <button onClick={() => this.setState({ num: ++this.state.num })}>Test</button>
            </div>
        );
    }
}

const r = () => render((
    <div>
        <Hello name={x => 1 + 1}>
            <App name="word"></App>
        </Hello>
    </div>
), document.getElementById('root'));

r();