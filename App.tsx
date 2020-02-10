import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers';
import Library from './containers/Library'

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Library/>
    </Provider>
  );
}


