import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import InfoScreen from '../screens/Information';
import SettingsScreen from '../screens/Settings';
import LoginScreen from '../screens/Login';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerType="slide"
      edgeWidth={0}
      drawerStyle={{backgroundColor: 'rgb(30, 30, 40)'}}
      drawerContentOptions={{
        activeTintColor: 'dodgerblue',
        inactiveTintColor: 'rgb(245,245,245)',
      }}>
      <Drawer.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{title: 'Information'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Log Out'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
