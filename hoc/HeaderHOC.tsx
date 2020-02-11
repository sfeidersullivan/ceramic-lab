import React from 'react';
import Header from '../containers/Header';

const HeaderHOC = Component => {
  Component.navigationOptions = ({ navigation }) => ({
    header: <Header />,
  });

  return Component;
}