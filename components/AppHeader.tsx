import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Body, Title, Left, Right,
} from 'native-base';

const AppHeader = (
  { left, title = 'Ceramic Lab', right }:
  { left: any, title?: string, right: any }
) => (
  <Container>
    <Header style={styles.header} >
      { left && 
        <Left>
          {left}
        </Left>
      }
      { title &&
        <Body>
          <Title style={styles.headerText}>{title}</Title>
        </Body>
      }
      { right &&
        <Right>
          {right}
        </Right>
      }
    </Header>
  </Container>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    // backgroundColor: 'darkslategray',
    shadowOffset: {  width: 0,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    // fontFamily: 'Gotham',
    color: 'black',
  },
});

export default AppHeader;
