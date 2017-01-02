import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import 'antd/dist/antd.css';

class Container extends Component {
    render() {
        return <div>{this.props.children}</div>
    }
}

let props = {
    name: 'Mike',
    age: 19
}
ReactDOM.render(<Container><Profile {...props} /></Container>, document.getElementById('root'));