import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import LibraryPiece from '../components/LibraryPiece';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';

interface Item {
  id: number,
  title: string,
};

const Library = ({ addPiece, pieces }) => (
  <FlatList
    columnWrapperStyle={{ flex: 1, flexGrow: 1, justifyContent: 'center'}}
    numColumns={2}
    renderItem={({ item: { title } }: { item: Item }) => (
      <LibraryPiece title={title} />
    )}
    data={pieces}
    keyExtractor={({ id }: Item) => `${id}`}
    ListEmptyComponent={() => <EmptyListPlaceholder onAdd={() => addPiece({ id: 1 })} />}
  />
);

const styles = StyleSheet.create({

});

export default Library;
