import {
  ADD_NEW_PIECE,
} from '../constants/actionTypes'

const initialState = {
  pieces: [
    { id: 1, title: 'Large plate' },
    { id: 2, title: 'Mug set' },
    { id: 3, title: 'Bowl' },
    // { id: 4, title: 'Stacking bowls' },
    // { id: 5, title: 'Vase' },
    // { id: 6, title: 'Dog bowl' },
  ],
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
    case ADD_NEW_PIECE:
      const { piece } = payload;
      return {
        ...state,
        pieces: [...state.pieces, piece]
      }
    default:
      return state
  }
}

export default library;
