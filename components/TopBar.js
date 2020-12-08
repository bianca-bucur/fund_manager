import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as MainContext } from '../contexts/main';

const TopBar = () => {
  const context = useContext(MainContext);
  const {
    isSideMenuOpen,
    setIsSideMenuOpen,
  } = context;

  return (
    <View>
      <MaterialIcons
        color='black'
        size={36}
        name='menu'
        onPress={() => {
          setIsSideMenuOpen(!isSideMenuOpen);
          console.log('pressed');
        }}
      />
    </View>
  );
}

export default TopBar;