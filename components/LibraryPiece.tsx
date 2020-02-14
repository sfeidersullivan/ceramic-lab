import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import {
  CardItem, Card as NBCard, Body, Thumbnail,
  Left, Right, Button, Icon, Text,
} from 'native-base';

import Card from './Card';

const LibraryPiece = ({ name, id }) => (
  <Card>
    <CardItem style={{ borderRadius: 10 }}>
      <Left>
        {/* <Thumbnail source={require('./assets/test-icon.png')} /> */}
        <Body>
          <Text>{name}</Text>
          <Text note>{id}</Text>
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
  </Card>
);

const styles = StyleSheet.create({

})

export default LibraryPiece;