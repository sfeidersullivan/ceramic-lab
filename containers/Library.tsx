import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux'

import LibraryComponent from '../components/Library';
import { piecesListSelector } from '../selectors';

const Library = ({ goToEditPiece, pieces }) => (
  <View style={styles.container}>
    <LibraryComponent goToEditPiece={goToEditPiece} pieces={pieces} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const mapStateToProps = (state: object) => ({
  pieces: piecesListSelector(state),
});

export default connect(mapStateToProps)(Library);
