import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import LibraryPiece from '../components/LibraryPiece';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';

interface Item {
  id: number,
  name: string,
};

const RenderItem = ({ item: { id, name } }: { item: Item }) => (
  <LibraryPiece id={id} name={name} />
);

const Library = ({ goToEditPiece, pieces }) => (
  <FlatList
    columnWrapperStyle={styles.columnWrapper}
    numColumns={2}
    renderItem={RenderItem}
    data={pieces}
    keyExtractor={({ id }: Item) => `${id}`}
    ListEmptyComponent={() => (
      <EmptyListPlaceholder onAdd={goToEditPiece} />
    )}
  />
);

const styles = StyleSheet.create({
  columnWrapper: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default Library;
