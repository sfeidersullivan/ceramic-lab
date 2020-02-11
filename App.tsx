import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers';
import Library from './containers/Library';
import Header from './containers/Header';

const store = createStore(reducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: ({ scene, previous, navigation }) => <Header/>,
            // headerStyle: { height: 80 },
          }}
          headerMode="screen"
        >
          <Stack.Screen
            name="Library"
            component={Library}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


