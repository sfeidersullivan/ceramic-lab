import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux'

import LibraryPiece from '../components/LibraryPiece';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { pieces } from '../selectors';

interface Item {
  id: number,
  title: string,
};

const Library = ({ goToEditPiece, pieces }) => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <FlatList
      // style={{ flex: 1 }}
      columnWrapperStyle={{ flex: 1, flexGrow: 1, justifyContent: 'center'}}
      numColumns={2}
      renderItem={({ item: { id } }: { item: Item }) => (
        <LibraryPiece title={id} />
      )}
      data={pieces}
      keyExtractor={({ id }: Item) => `${id}`}
      ListEmptyComponent={() => <EmptyListPlaceholder onAdd={goToEditPiece} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'darkslategray',
  },
  headerText: {
    // fontFamily: 'Gotham',
    color: 'white',
  }
});

const mapStateToProps = (state: object) => ({
  pieces: pieces(state),
});

export default connect(mapStateToProps)(Library);
