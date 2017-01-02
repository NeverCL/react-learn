import React = require('react');
import DOM = require('react-dom');
import App from './app';

var root = document.createElement('div');
document.body.appendChild(root);
DOM.render(<App name=" World!你好,世界!" />, root);