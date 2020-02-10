import * as types from '../constants/actionTypes'

export const addPiece = (piece: object) => ({
  type: types.ADD_NEW_PIECE,
  payload: { piece },
})
