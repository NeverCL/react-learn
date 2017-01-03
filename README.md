# react-learn
React

## todo

- flux

- redux

- animation

- test

- 按需加载

- typescript react

## 01.typescript + react + webpack

- //todo npm install --save react react-dom @types/react @types/react-dom

- npm i awesome-typescript-loader source-map-loader -D

- npm i typescript typings webpack -g

- npm i react react-dom -S

## 02.jsx

- jsx
    - javascript xml
    - tsx typescript
    - jsx webpack

- this.props
    - <App name="world"/> -> this.props.name
    - this.props.children

- 特殊
    - class -> className
    - style = {{color:'red'}}

- npm i babel-loader babel-core babel-preset-es2015 babel-preset-react -D

- npm i babel-preset-react-hmre -D


## 05.flux

- view 视图层

- actions 视图发出的消息(如:onClick)

- dispatcher 接收消息,执行回调函数

- store 存放状态,变化则影响view



## 06.redux

- Reducer 
    - Reducer是一个函数,接收当前state和action,返回新的state.
    - Store接收action,返回新的state.过程由Reducer执行.
    - Store.dispatch 方法会调用Reducer的执行.
    - Reducer是纯函数

- store.getState()
    - 返回新的state

- store.subscribe
    - Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
    - store.subscribe方法返回一个函数，调用这个函数就可以解除监听。
    - 一般用来将计算后的state 赋值到组件上

- store.dispatch
    - store.dispatch(action);
