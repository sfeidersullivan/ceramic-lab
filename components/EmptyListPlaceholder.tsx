import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'native-base';

const EmptyListPlaceholder = ({ onAdd }) => (
  <TouchableOpacity onPress={onAdd} >
    <View style={styles.container}>
      <Text>Your first piece!</Text>
      <Icon name="add-circle" style={styles.addIcon} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    margin: 10,
  },
  addIcon: {
    fontSize: 50,
    paddingTop: 20,
  }
});

export default EmptyListPlaceholder;