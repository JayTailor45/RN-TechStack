import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';

const App = () => {
  return(
      <Provider store={createStore(reducer)}>
        <View/>
      </Provider>
  )
};

export default App;