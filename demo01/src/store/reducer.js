const defaultState = {
  inputValue: '默认输入的内容',
  list: ['早7点起床', '早8点到公司吃早饭', '早9点开晨会']
}
// state 是 存在的数据，action 是 传递过来的数据
export default (state = defaultState, action) => {
  
  // reducer 里只能接受state，不能改变state
  if (action.type === 'changeInput') {
    // 深拷贝一份 state 数据
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}