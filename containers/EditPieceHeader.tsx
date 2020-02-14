import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';

import { upsertPiece, resetEditPiece } from '../actions';
import AppHeader from '../components/AppHeader';

const EditPieceHeader = ({ upsertPiece, resetEditPiece, goBack, goToLibrary, editPiece }) => {
  const onAddPiece = () => {
    upsertPiece(editPiece);
    goToLibrary();
  };
  const onClose = () => {
    resetEditPiece();
    goBack();
  }

  return (
    <AppHeader
      left={
        <Button transparent onPress={onClose}>
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

export default connect(mapStateToProps, { upsertPiece, resetEditPiece })(EditPieceHeader);
