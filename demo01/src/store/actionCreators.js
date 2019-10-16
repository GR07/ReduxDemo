import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

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

export {
  changeInputAction,
  addItemAction,
  deleteItemAction
}