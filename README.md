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
    - createStore(fn,middle,state) :middle为中间件

- store.dispatch
    - view发出action的方法
    - `store.dispatch(addTodo('Learn Redux'))`

- store.subscribe
    - 监听函数，一旦State发生变化，就自动执行这个函数。
    - store.subscribe方法返回一个函数，调用这个函数就可以解除监听。
    - 一般监听render函数

### [awesome-redux](https://github.com/xgrommx/awesome-redux)

## Redux-Middleware

- [redux-logger](https://github.com/evgenyrodionov/redux-logger)
    - 日志中间件
    - npm i redux-logger -S
    - 使用
```js
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```
    - 多个middle`applyMiddleware(thunk, promise, logger)`

- [redux-thunk](https://github.com/gaearon/redux-thunk)
    - 改造store.dispatch，使其可以接受函数作为参数
    - cnpm i redux-thunk -S
    - 使用
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
```

- [redux-promise](https://github.com/acdlite/redux-promise)
    - npm i redux-promise -S
    - 使用
```js
import promiseMiddleware from 'redux-promise';

const store = createStore(
  reducer,
  applyMiddleware(promiseMiddleware)
); 
```


## React-Redux

- UI组件
    - 没有状态(不使用this.state)
    - 所有数据由参数(this.props)提供
    - 不使用redux API
    - demo 
```js
const App = props => <span>{props.text}</span>
//or
const App = ({text}) => <span>{text}</span>
```

- 容器组件
    - 带有内部状态
    - 使用redux API

- connect()
    - 将UI组件 => 容器组件
    - state => props
    - dispatcher => props
    - demo
```js
connect(
    mapStateToProps,
    mapDispatcherToProps
)(App)
```

- mapStateToProps()
    - 建立外部的state和props映射关系
    - demo
```js
const mapStateToProps = (state, prop) =>//这里的prop是容器的prop
                 { todos: state.todos }
```

- mapDispatcherToProps()
    - 定义UI组件哪些操作当做action
    - 可以是一个函数
    - 可以是一个对象
```js
const mapDispatcherToProps = (dispatch, prop) => //这里的prop是容器的prop
        {onClick: dispatch({ type: 'add', text: prop.text})};

const mapDispatcherToProps = text => {type: 'add', text};
```

- Provider
    - Provider组件可以让子容器组件拿到state
    - 利用react的context属性




## html-webpack-plugin

- [配置文件](https://www.npmjs.com/package/html-webpack-plugin#configuration)



## react-redux

- [doc](http://redux.js.org/docs/basics/UsageWithReact.html)