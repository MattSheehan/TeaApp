import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import DrawerNav from './src/navigation/DrawerNav';
import BottomTabNav from './src/navigation/BottomTabNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
//import {DarkTheme} from './src/navigation/theme';

function App() {
  //const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

/*

ClientID=iZzLYMzgddYgtowcS-M54Q

APIKey=03uZkwuYC559PVZrsOVg518Z0yjHuzsUPZD0VPDMmMABC2i9fgPzBths9exZUa8RRHlIP_DwT6K-oZAgZseUSW8yBKKUJ9nsDiXiJrbXSRQ1GWDfBimiLF6_8VsfX3Yx

*/
