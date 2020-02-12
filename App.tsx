import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers';
import Library from './containers/Library';
import EditPiece from './containers/EditPiece';
import Header from './containers/LibraryHeader';
import EditPieceHeader from './containers/EditPieceHeader';
import { PAGE_EDIT_PIECE, PAGE_LIBRARY } from './constants/pages';

const store = createStore(reducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: ({ scene, previous, navigation }) => (
              <Header
                goBack={ previous ? navigation.goBack : undefined }
                goToEditPiece={ () => navigation.navigate(PAGE_EDIT_PIECE) }
              />
            ),
            // headerStyle: { height: 80 },
          }}
          headerMode="screen"
        >
          <Stack.Screen
            name={PAGE_LIBRARY}
            component={({ scene, previous, navigation }) => (
              <Library
                goToEditPiece={() => navigation.navigate(PAGE_EDIT_PIECE)}
              />
            )}
          />
          <Stack.Screen
            name={PAGE_EDIT_PIECE}
            component={EditPiece}
            options={{
              header: ({ scene, previous, navigation }) => (
                <EditPieceHeader
                  goBack={ previous ? navigation.goBack : undefined }
                  goToLibrary={ () => navigation.navigate(PAGE_LIBRARY) }
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


