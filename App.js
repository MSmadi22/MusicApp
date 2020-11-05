import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigation';
import Store from './app/store';
import {AppColors} from './app/theme/Colors';

const App = () => (
  <Provider store={Store}>
    <SafeAreaView style={{flex: 1, width: '100%', backgroundColor: AppColors.lightGray}}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content'/>
      <AppNavigator />
    </SafeAreaView>
  </Provider>
);

export default App;
