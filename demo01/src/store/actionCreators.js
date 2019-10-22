import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

const addItemAction = () => ({
  type: ADD_ITEM,
})

const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

const getListAction = (data) => ({
  type: GET_LIST,
  data
})

const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://rap2api.taobao.org/app/mock/233908/getList').then((res) => {
      const data = res.data
      console.log(data)
      const action = getListAction(data)
      dispatch(action)
    })
  }
}

export {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction,
  getTodoList
}