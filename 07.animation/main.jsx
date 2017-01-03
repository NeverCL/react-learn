import React, { Component } from 'react';
import DOM from 'react-dom';
import TweenOne from 'rc-tween-one';

class App extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <h1 >Hello World!{this.props.name}</h1>
            </div>
        );
    }
}

DOM.render((
    <div>
        <TweenOne animation={{
            rotate: -180,
            blur: '10px', yoyo: true, duration: 3000, repeat: -1
        }}>
            <App name="荡秋千"></App>
        </TweenOne>
        <TweenOne animation={{ y: '700px', yoyo: true, duration: 1000, repeat: -1 }}>
            <App name="垂直飞机"></App>
        </TweenOne>
    </div>
), document.body.appendChild(document.createElement('div')));
