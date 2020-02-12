export const pieces = state =>
  state.library.pieces.allIds.map(id => state.library.pieces.byId[id]);