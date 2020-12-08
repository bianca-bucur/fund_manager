import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import {
  Provider as MainProvider,
} from './contexts/main';
import * as ScreenOrientation from 'expo-screen-orientation';

import  TopBar  from './components/TopBar';
import  SideMenu  from './components/SideMenu';

const App = (props) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  return (
    <MainProvider {...props}>
      <View style={styles.container}>
        <TopBar />
        <SideMenu />
      </View>
    </MainProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: Constants.statusBarHeight
  },
});

export default App;
