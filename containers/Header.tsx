import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Container, Header as NBHeader, Body, Title, Left, Right, Button, Icon,
} from 'native-base';

import { addPiece } from '../actions';

const Header = ({ children, addPiece }) => (
  <Container>
    <NBHeader style={styles.header} >
      <Left>
        <Button transparent>
          <Icon name='flask' />
        </Button>
      </Left>
      <Body>
        <Title style={styles.headerText}>Ceramic Lab</Title>
      </Body>
      <Right>
        <Button transparent onPress={addPiece}>
          <Icon name='add' />
        </Button>
      </Right>
    </NBHeader>
    {children}
  </Container>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslategray',
  },
  headerText: {
    // fontFamily: 'Gotham',
    color: 'white',
  },
});

export default connect(null, { addPiece })(Header);
