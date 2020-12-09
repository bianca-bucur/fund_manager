import React, { useState, createContext, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import * as Device from 'expo-device';

const Context = createContext();

const Provider = ({
  children,
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [addItemModalVisible, setAddItemModalVisible] = useState(false);

  const deviceOsVersion = Device.osVersion;

  const [hasPermission, setHasPermission] = useState(false);

  const setPermissions = async () => {
    if(!hasPermission)
    {
      let permStatus;
      if(Device.manufacturer!=='Apple') {
        if (Number.parseInt(deviceOsVersion.split('.')[0]) >= 10) {
          permStatus = await PermissionsAndroid.requestMultiple(
            [
              PermissionsAndroid.PERMISSIONS.CAMERA,
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]
          );
          setHasPermission(
            permStatus["android.permission.CAMERA"] === 'granted'
            && permStatus["android.permission.READ_EXTERNAL_STORAGE"] === 'granted'
          );
        }
        else {
          permStatus = await PermissionsAndroid.requestMultiple(
            [
              PermissionsAndroid.PERMISSIONS.CAMERA,
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]
          );
          setHasPermission(
            permStatus["android.permission.CAMERA"] === 'granted'
            && permStatus["android.permission.READ_EXTERNAL_STORAGE"]
          );
        }
      }
    }
  }

  return (
    <Context.Provider
      value={{
        isSideMenuOpen,
        setIsSideMenuOpen,
        addItemModalVisible,
        setAddItemModalVisible,
        hasPermission,
        setPermissions,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export {
  Context,
  Provider,
};