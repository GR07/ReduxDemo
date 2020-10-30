import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// 这只是一个控制台的调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
// applyMiddleware 是 redux 使用插件的中间件
const enhancer = composeEnhancers(applyMiddleware(thunk))
// 赋值为 reducer.js 中的数据对象
// 因为 createStore() 只能接收两个参数，所以用上面的增强函数合并 thunk和redux调试插件，再放入createStore()中。
const store = createStore(
  reducer,
  enhancer
)
export default store