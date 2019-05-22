import React from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
  return(
      <Provider store={createStore(reducer)}>
        <SafeAreaView style={{flex: 1}}>
          <Header headerText={'Tech Stack'}/>
          <LibraryList/>
        </SafeAreaView>
      </Provider>
  )
};

export default App;