import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux'

import Card from '../components/Card';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { pieces } from '../selectors';
import { addPiece } from '../actions';

interface Item {
  id: number,
  title: string,
};

const Library = ({ addPiece, pieces }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      // style={{ flex: 1 }}
      columnWrapperStyle={{ flex: 1, flexGrow: 1, justifyContent: 'center'}}
      numColumns={2}
      renderItem={({ item: { title } }: { item: Item }) => (
        <Card title={title} />
      )}
      data={pieces}
      keyExtractor={({ id }: Item) => `${id}`}
      ListEmptyComponent={() => <EmptyListPlaceholder onAdd={() => addPiece({ id: 1 })} />}
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

export default connect(mapStateToProps, { addPiece })(Library);
