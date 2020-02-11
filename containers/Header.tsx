import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';

import { addPiece } from '../actions';
import AppHeader from './AppHeader';

const Header = ({ addPiece, goBack, goToEditPiece }) => {
  return (
    <AppHeader
      left={
        <Button transparent onPress={goBack}>
          <Icon name='flask' />
        </Button>
      }
      title="Ceramic Lab"
      right={
        <Button transparent onPress={goToEditPiece}>
          <Icon name='add' />
        </Button>
      }
    />
  );
}

export default connect(null, { addPiece })(Header);
