import React from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { Header } from "./components/common";

const App = () => {
  return(
      <Provider store={createStore(reducer)}>
        <SafeAreaView>
          <Header headerText={'Tech Stack'}/>
        </SafeAreaView>
      </Provider>
  )
};

export default App;