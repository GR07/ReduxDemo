import React, { Component } from 'react';
// 阿里的ui库
import 'antd/dist/antd.css'
// 按需引入ui库组件
import { Input, Button, List } from 'antd'
import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'


class TodoList extends Component {
  constructor(props) {
    super(props);
    // 获取store数据对象
    this.state = store.getState()

    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    // this.deleteItem = this.deleteItem.bind(this)

    // 订阅
    this.storeChange = this.storeChange.bind(this)
    // 当 store 发生改变，执行订阅。
    // 订阅（如果value绑定了 state ,那就必须订阅(subscribe)才能更新视图）。
    // 理解：为什么要订阅模式？ 因为redux中store的数据改变了，所以要在组件里的state重新赋值。
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <div style={{ margin: '10px' }}>
        <div>
          <Input 
            placeholder={this.state.inputValue} 
            style={{ width: '250px', marginRight: '10px'}}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button type='primary' onClick={this.clickBtn}>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px'}}>
          <List bordered dataSource={this.state.list} renderItem={ (item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>) } />
        </div>
      </div>
     );
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