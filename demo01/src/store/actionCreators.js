import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

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

export {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction
}