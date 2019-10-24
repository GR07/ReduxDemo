import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'


// Provider 标签内都可以使用store中的数据
const App = (
  <Provider store={ store }>
    <TodoList></TodoList>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));


