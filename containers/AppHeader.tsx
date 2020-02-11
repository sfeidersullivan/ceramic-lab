import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Body, Title, Left, Right,
} from 'native-base';

const AppHeader = ({ left, title, right }) => (
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
    backgroundColor: 'darkslategray',
  },
  headerText: {
    // fontFamily: 'Gotham',
    color: 'white',
  },
});

export default AppHeader;
