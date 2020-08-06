import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';

// This file is created so Login & SignUp share the same tab bar icon
const AuthStack = createStackNavigator();
const AuthStackNav = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: 'tansparent',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNav;
