import React, { Component } from 'react'
import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
  constructor(props) {
    super(props);
    // 获取store数据对象
    this.state = store.getState()

    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    // 订阅
    this.storeChange = this.storeChange.bind(this)
    // 当 store 发生改变，执行订阅。
    // 订阅（必须订阅(subscribe)才能更新视图）。
    // 理解：为什么要订阅模式？ 因为redux中store的数据改变了，所以要给组件里的state重新赋值。
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <TodoListUI 
        changeInputValue={this.changeInputValue} 
        inputValue={this.state.inputValue} 
        clickBtn={this.clickBtn} 
        list={this.state.list} 
        deleteItem={this.deleteItem}
      />
     );
  }
  componentDidMount () {
    const action = getTodoList()
    store.dispatch(action)
    
  }
  changeInputValue (e) {
    const action = changeInputAction(e.target.value)
    // 把更改的数据用 dispatch派发 传给store，然后store接收后 会自动传给reducer.js
    store.dispatch(action)
  }
  clickBtn () {
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  // 订阅
  storeChange () {
    // 组件内state 赋值为 store数据
    this.setState(store.getState())
  }
}
 
export default TodoList;