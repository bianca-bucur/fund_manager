import React, { useEffect, useContext, createRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  NavigationContainer,
  DrawerActions,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import { Context as MainContext } from '../contexts/main';
import BCScanner from './BCScanner';

const Drawer = createDrawerNavigator();

const SideMenu = () => {
  const context = useContext(MainContext);
  const {
    isSideMenuOpen,
    hasPermissions,
    setPermissions,
  } = context;

  const navigation = createRef();

  useEffect(() => {
    if (!hasPermissions) {
      setPermissions();
    }
    else {
      navigation.current.dispatch(DrawerActions.toggleDrawer());
    }
  }, [isSideMenuOpen]);

  return (
    <NavigationContainer ref={navigation}>
      <Drawer.Navigator
        initialRouteName='Scan Barcode'
      >
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons name="qrcode-scan" size={30} color="#50c6f1" />
            ),
            unmountOnBlur: true
          }}
          name='Scan Barcode'
          component={BCScanner}
          initialParams={navigation}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default SideMenu;