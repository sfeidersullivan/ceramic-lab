import { createSelector } from 'reselect';

export const librarySelector = state => state.library;
export const piecesSelector = state => state.library.pieces;

export const piecesListSelector = createSelector(
  piecesSelector,
  pieces => pieces.allIds.map(id => pieces.byId[id])
);
