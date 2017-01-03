import React, { Component } from 'react';
import DOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}
var root = document.createElement('div');
document.body.appendChild(root);

DOM.render((
    <App />
), root);