import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerIcon from '../components/DrawerIcon';
import {createStackNavigator} from '@react-navigation/stack';
import SearchBar from '../components/SearchBar';
import SomeList from '../components/SomeList';

const InfoScreen = ({navigation, route}) => {
  navigation.setOptions({
    headerLeft: () => (
      <DrawerIcon navigation={navigation} size={40} color={'rgb(30,30,50)'} />
    ),
  });

  const [term, setTerm] = useState('');

  const TheTitle = ({theTitle}) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titlestyle}>{theTitle}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar
          navigation={navigation}
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => console.log('term was submitted')}
        />
      </View>
      <ScrollView>
        <View style={{paddingTop: 40, paddingLeft: 10}}>
          <TheTitle theTitle="FILTERED LIST" />
          <SomeList navigation={navigation} />
        </View>
        <View style={{paddingTop: 2, paddingLeft: 10}}>
          <TheTitle theTitle="RECENTLY VIEWED" />
          <SomeList navigation={navigation} />
        </View>
        <View style={{padding: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'rgb(25,25,25)',
  },
  shopsContainer: {
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
    borderBottomLeftRadius: 7.5,
    borderBottomRightRadius: 7.5,
    shadowColor: 'rgb(255,255,255)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    width: 300,
    height: 300,
    backgroundColor: 'rgb(55,55,55)',
    flex: 1,
  },
  titleContainer: {
    width: 190,
    borderColor: 'transparent',
    borderWidth: 2,
    paddingVertical: 5,
  },
  titlestyle: {
    fontSize: 16,
    color: 'rgb(235,235,235)',
    paddingLeft: 20,
  },
  itemstyle: {
    color: 'rgb(255,255,255)',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  footer: {
    flex: 6,
    backgroundColor: 'transparent',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#272727',
        },
        headerTintColor: 'rgb(25, 225, 125)',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
    </Stack.Navigator>
  );
}
