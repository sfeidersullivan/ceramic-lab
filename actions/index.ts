import * as types from '../constants/actionTypes'

export const upsertPiece = (piece: object) => ({
  type: types.UPSERT_PIECE,
  payload: { piece },
});

export const resetEditPiece = () => ({
  type: types.RESET_EDIT_PIECE,
});

export const setPieceName = (name: string) => ({
  type: types.SET_PIECE_NAME,
  payload: { name },
});
