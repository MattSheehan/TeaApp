import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InfoScreen from '../screens/Information';
import SettingsScreen from '../screens/Settings';
import AuthStackNav from './AuthStack';
//import LoginScreen from '../screens/Login';
//import SignUpScreen from '../screens/SignUpScreen';
import Icon from 'react-native-vector-icons/Feather';
import {useSafeArea} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default () => {
  const inset = useSafeArea();

  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'InfoScreen') {
            iconName = focused ? 'search' : 'search';
          }
          if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }
          if (route.name == 'Login') {
            iconName = focused ? 'log-out' : 'log-out';
          }
          // if you have a variable ==== name of property, no need to define it.
          const borderTopColor = color;
          return (
            <View
              style={{
                borderColor: 'transparent',
                borderWidth: 2,
                borderTopColor,
                padding: 23,
                width: '100%',
                alignItems: 'center',
              }}>
              <Icon name={iconName} size={34} color={color} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'dodgerblue',
        inactiveTintColor: 'rgb(205, 205, 205)',
        activeBackgroundColor: 'rgb(40, 40, 40)',
        inactiveBackgroundColor: 'rgb(25,25,25)',
        safeAreaInsets: {flex: 1, bottom: inset.bottom, top: 0},
        tabStyle: {height: 100, alignItems: 'center', justifyContent: 'center'},
      }}>
      <Tab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name="Login"
        component={AuthStackNav}
        options={{title: '', tabBarVisible: false}}
      />
    </Tab.Navigator>
  );
};

/*
<Tab.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{tabBarVisible: false}}
      />
*/
