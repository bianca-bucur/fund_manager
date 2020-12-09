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

import {
  addToStorage,
  removeFromStorage,
  getAllFromStorage,
} from '../services/productStorage';

import AddItemModal from './AddItemModal';

const BCScanner = ({ navigation }) => {
  const context = useContext(MainContext);

  const {
    addItemModalVisible,
    setAddItemModalVisible,
  } = context;

  const [scanned, setScanned] = useState(false);
  const [scannedBarCode, setScannedBarcode] = useState();

  const handleBarCodeScanned = ({ type, data }) => {
    try {
      console.log(type, data);
      setAddItemModalVisible(true);
      setScannedBarcode(data);
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
      <Button
        onPress={() => {
          addToStorage({
            barCode: '1234',
            // name: 'cable',
            price: '18.4'
          });
        }}
        title='Add'
      >
      </Button>
      <Button
        onPress={() => {
          getAllFromStorage().then((result) => {
            console.log(result);
          })
            .catch((err) => {
              console.log('err', err);
            });
        }}
        title='Get'
      >
      </Button>
      <AddItemModal
        navigation={navigation}
        scannedBarCode={scannedBarCode}
      />
    </View>
  )
}

export default BCScanner;