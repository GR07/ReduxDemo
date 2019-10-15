import {createStore} from 'redux'
import reducer from './reducer'
// 赋值为 reducer.js 中的数据对象
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux调试插件
)
export default store