import uuid from 'uuid/v1';
import {
  ADD_NEW_PIECE,
  UPSERT_PIECE,
} from '../constants/actionTypes'

const initialState = {
  pieces: {
    byId: {},
    allIds: [
      // { id: 1, title: 'Large plate' },
      // { id: 2, title: 'Mug set' },
      // { id: 3, title: 'Bowl' },
      // { id: 4, title: 'Stacking bowls' },
      // { id: 5, title: 'Vase' },
      // { id: 6, title: 'Dog bowl' },
    ],
  },
  editPiece: {},
};

interface Action {
  type: string,
};

interface AddNewPieceAction extends Action {
  payload: {
    piece: object,
  }
};

const library = (state = initialState, action: AddNewPieceAction) => {
  const { type, payload } = action;
  switch (type) {
    case UPSERT_PIECE:
      const { piece } = payload;
      const { id } = piece;
      const existingPiece = !!id;
      const updatedId = existingPiece ? id : uuid();
      const updatedPiece = {
        ...piece,
        id: updatedId,
      };

      return ({
        ...state,
        pieces: {
          byId: {
            ...state.pieces.byId,
            [updatedId]: updatedPiece,
          },
          allIds: existingPiece ?
            state.pieces.allIds :
            [...state.pieces.allIds, updatedId],
        }
      });
    default:
      return state
  }
}

export default library;
