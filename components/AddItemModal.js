import React, { useContext, useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
} from 'react-native';
import {
  BoldText,
  CustomTextInput,
  DetailsText,
  CustomButton,
  BigBoldText,
} from '../utils/customComponents';

import { Context as MainContext } from '../contexts/main';

import {
  addToStorage,
  removeFromStorage,
  getAllFromStorage,
} from '../services/productStorage';

const AddItemModal = ({
  navigation,
  scannedBarCode,
}) => {
  const context = useContext(MainContext);
  const {
    addItemModalVisible,
    setAddItemModalVisible,
  } = context;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal
        presentationStyle='formSheet'
        animationType='slide'
        visible={addItemModalVisible}
      >
        <View style={styles.modalView}>
          <BigBoldText>Scanned barcode: {scannedBarCode}</BigBoldText>
          <BigBoldText>Product name:</BigBoldText>
          <CustomTextInput
            value={name}
            onChangeText={val => {
              setName(val);
            }}
          />
          <BigBoldText>Product price:</BigBoldText>
          <CustomTextInput
            numeric
            keyboardType='numbers-and-punctuation'
            value={price.toString()}
            onChangeText={val => {
              setPrice(val);
            }}
          />
          <BigBoldText>Quantity: </BigBoldText>
          <CustomTextInput
            numeric
            keyboardType='numbers-and-punctuation'
            value={quantity.toString()}
            onChangeText={val => {
              setQuantity(val);
            }}
          />
          <CustomButton
            onPress={() => {
              addToStorage({
                barCode: scannedBarCode,
                name: name,
                price: price,
                quantity: quantity,
              });
            }}
          >
            <BigBoldText>
              ADD PRODUCT
            </BigBoldText>
          </CustomButton>
          <CustomButton
            onPress={() => {
              setAddItemModalVisible(false);
            }}
          >
            <BigBoldText>
              CANCEL
            </BigBoldText>
          </CustomButton>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    display: 'flex',
    top: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default AddItemModal;