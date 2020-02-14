import React from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Picker, Input, Icon, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { setPieceName } from '../actions'

const FormSection = ({ iconName, children }) => (
  <View style={{ flexDirection: 'row', paddingLeft: 15, paddingRight: 15 }}>
    <View style={{ width: 40, alignItems: 'center' }}>
      <Icon style={{ paddingTop: 10 }} active name={iconName} />
    </View>
    <View style={{ flex: 1 }}>
      {children}
    </View>
  </View>
);

const EditPiece = ({ setPieceName }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.addImageContainer}>
        <TouchableOpacity style={styles.addImageButton}>
          <Icon style={styles.addImageIcon} name="image" />
        </TouchableOpacity>
      </View>
      <Form>
        <FormSection iconName="beaker" >
          <Item inlineLabel>
            <Input placeholder="Name" onChangeText={setPieceName} />
          </Item>
          <Item inlineLabel>
            <Input placeholder="Description"/>
          </Item>
        </FormSection>
        <FormSection iconName="construct" >
          <Item inlineLabel picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ height: 50, marginLeft: 2 }}
              placeholder="Clay body"
              // placeholderStyle={{ color: "#bfc6ea" }}
              // placeholderIconColor="#007aff"
              selectedValue={undefined}
              // onValueChange={}
            >
              <Picker.Item label="Porcelain" value="key0" />
              <Picker.Item label="Dark brown" value="key1" />
              <Picker.Item label="Solidate" value="key2" />
              <Picker.Item label="B mix" value="key3" />
              <Picker.Item label="Unknown" value="key4" />
            </Picker>
          </Item>
          <Item inlineLabel>
            <Input placeholder="Weight"/>
          </Item>
          <Item inlineLabel>
            <Input placeholder="Dimensions"/>
          </Item>
          <Item inlineLabel>
            <Input placeholder="Glaze"/>
          </Item>
        </FormSection>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addImageContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addImageButton: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  addImageIcon: {
    alignSelf: 'center',
    color: 'white',
  },
})

export default connect(null, { setPieceName })(EditPiece);
