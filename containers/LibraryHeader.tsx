import React from 'react';
import { Button, Icon } from 'native-base';

import AppHeader from '../components/AppHeader';

const LibraryHeader = ({ goBack, goToEditPiece }) => {
  return (
    <AppHeader
      left={
        <Button transparent onPress={goBack}>
          <Icon name='flask' style={{ color: 'dimgray' }} />
        </Button>
      }
      // title="Ceramic Lab"
      right={
        <Button transparent onPress={goToEditPiece}>
          <Icon name='add' style={{ color: 'dimgray' }} />
        </Button>
      }
    />
  );
}

export default LibraryHeader;
