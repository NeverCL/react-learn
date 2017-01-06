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

### 名词解释
- Store
    - 整个应用只能有一个 Store,通过createStore创建
    - `import { createStore } from 'redux'; const store = createStore(fn);`

- State
    - state是某一时刻的store
    - `const state = store.getState();`

- Action
    - view不能直接修改state,通过store.dispatch发出action.
    - action是一个对象,必须包含type属性 [规范](https://github.com/acdlite/flux-standard-action)
    - `const action = {type: 'ADD_TODO',payload: 'Learn Redux'}`

- Action Creator
    - 用来生成Action,方便view调用
    - `const addTodo = (text) => { return {type: 'ADD_TODO',payload: text} }`

- Reducer 
    - view发出的action,store交给reducer来处理,并返回新的state
    - reducer代码如下
```js
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};
```

- 拆分Reducer
    - 对于大型应用来说，State 必然十分庞大，导致 Reducer 函数也十分庞大。
    - 1.根据state属性拆分reducer
    - 2.通过redux提供的combineReducers可以将子reducer合并


### API
- createStore
    - createStore(fn) :fn为reducer
    - createStore(fn,state) :state为默认state
    - createStore(fn,middle,defaultState) :middle为中间件

- store.dispatch
    - view发出action的方法
    - `store.dispatch(addTodo('Learn Redux'))`

- store.subscribe
    - 监听函数，一旦State发生变化，就自动执行这个函数。
    - store.subscribe方法返回一个函数，调用这个函数就可以解除监听。
    - 一般监听render函数



## html-webpack-plugin

- [配置文件](https://www.npmjs.com/package/html-webpack-plugin#configuration)



## react-redux

- [doc](http://redux.js.org/docs/basics/UsageWithReact.html)