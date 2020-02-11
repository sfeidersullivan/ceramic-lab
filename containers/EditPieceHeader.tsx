import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';

import { addPiece } from '../actions';
import AppHeader from './AppHeader';

const EditPieceHeader = ({ addPiece, goBack, goToLibrary }) => {
  const onAddPiece = () => {
    goToLibrary();
    addPiece({});
  };

  return (
    <AppHeader
      left={
        <Button transparent onPress={goBack}>
          <Icon name='close' />
        </Button>
      }
      title="Ceramic Lab"
      right={
        <Button transparent onPress={onAddPiece}>
          <Icon name='save' />
        </Button>
      }
    />
  );
}

export default connect(null, { addPiece })(EditPieceHeader);
