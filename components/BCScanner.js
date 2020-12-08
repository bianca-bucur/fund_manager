import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import {
  BarCodeScanner
} from 'expo-barcode-scanner';
import { Context as MainContext } from '../contexts/main';

const BCScanner = ({ navigation }) => {
  const context = useContext(MainContext);

  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    try {
      console.log(type, data);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  )
}

export default BCScanner;