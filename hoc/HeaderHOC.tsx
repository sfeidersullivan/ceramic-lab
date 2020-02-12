import React from 'react';
import Header from '../containers/LibraryHeader';

const HeaderHOC = Component => {
  Component.navigationOptions = ({ navigation }) => ({
    header: <Header />,
  });

  return Component;
};

export default HeaderHOC;
