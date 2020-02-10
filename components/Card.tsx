import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import {
  CardItem, Card as NBCard, Body, Thumbnail,
  Left, Right, Button, Icon, Text,
} from 'native-base';

const Card = ({ title }) => (
  <View style={styles.container}>
  {/* <NBCard style={{ flex: 1, borderRadius: 10, maxWidth: 400 }}> */}
    <CardItem style={{ borderRadius: 10 }}>
      <Left>
        {/* <Thumbnail source={require('./assets/test-icon.png')} /> */}
        <Body>
          <Text>{title}</Text>
          <Text note>Seamus</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image
        source={require('../assets/test-icon.png')}
        style={{ flex: 1, resizeMode: 'cover', width: 'auto', height: 200 }}
      />
    </CardItem>
    <CardItem style={{ borderRadius: 10 }}>
      <Button transparent>
        <Icon name="flame" style={{ color: 'orange' }} />
      </Button>
      <Button transparent>
        <Icon name="paper" style={{ color: 'black' }} />
      </Button>
    </CardItem>
  {/* </NBCard> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightgray',
    borderColor: 'lightgray',
    borderWidth: 3,
    borderRadius: 10,
    // padding: 10,
    margin: 5,
    maxWidth: 400,
  }
})

export default Card;