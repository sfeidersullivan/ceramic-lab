import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';

import { upsertPiece } from '../actions';
import AppHeader from '../components/AppHeader';

const EditPieceHeader = ({ upsertPiece, goBack, goToLibrary, editPiece }) => {
  const onAddPiece = () => {
    upsertPiece(editPiece);
    goToLibrary();
  };

  return (
    <AppHeader
      left={
        <Button transparent onPress={goBack}>
          <Icon name='close' style={{ color: 'dimgray' }} />
        </Button>
      }
      title="Create piece"
      right={
        <Button transparent onPress={onAddPiece}>
          <Icon name='save' style={{ color: 'dimgray' }} />
        </Button>
      }
    />
  );
};

const mapStateToProps = state => ({
  editPiece: state.library.editPiece,
});

export default connect(mapStateToProps, { upsertPiece })(EditPieceHeader);
