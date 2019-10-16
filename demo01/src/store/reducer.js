import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'

const defaultState = {
  inputValue: '默认输入的内容',
  list: ['早7点起床', '早8点到公司吃早饭', '早9点开晨会']
}
// state 是 存在的数据，action 是 传递过来的数据
export default (state = defaultState, action) => {
  
  // reducer 里只能接受state，不能改变state
  if (action.type === CHANGE_INPUT) {
    // 深拷贝一份 state 数据
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    // 深拷贝一份 state 数据
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}