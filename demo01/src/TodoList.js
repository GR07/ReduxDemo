import React, { Component } from 'react';
// 阿里的ui库
import 'antd/dist/antd.css'
// 按需引入ui库组件
import { Input, Button, List } from 'antd'
import store from './store/index'


class TodoList extends Component {
  constructor(props) {
    super(props);
    // 获取store数据对象
    this.state = store.getState()

    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    // 订阅（如果value绑定在了 state 里 必须订阅(subscribe)才能更新视图）
    // 理解：为什么要订阅模式？ 因为redux中store的数据改变了，所以要在组件里的state重新赋值
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
          <Button type='primary'>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px'}}>
          <List bordered dataSource={this.state.list} renderItem={ item => (<List.Item>{item}</List.Item>) } />
        </div>
      </div>
     );
  }
  changeInputValue (e) {
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    // 把更改的数据用 dispatch派发 传给store，然后store接收后 会自动传给reducer.js
    store.dispatch(action)
  }
  storeChange () {
    // 组件内state 赋值为 store数据
    this.setState(store.getState())
  }
}
 
export default TodoList;