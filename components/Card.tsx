import React from 'react'
import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightgray',
    // borderColor: 'lightgray',
    // borderWidth: 3,
    borderRadius: 10,
    // padding: 10,
    margin: 5,
    maxWidth: 400,
    shadowOffset: {  width: 0,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 8,
  }
})

export default Card;