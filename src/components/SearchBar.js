import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TextInput, View, StyleSheet, Dimensions} from 'react-native';
import {Text} from './common/Text';
import Icon from 'react-native-vector-icons/Feather';
import DrawerIcon from './DrawerIcon';
import {Drawer} from 'react-native-paper';

const SearchBar = ({navigation, term, onTermChange}) => {
  const {colors, dark} = useTheme();
  const theColor = 'rgb(40, 154, 255)';
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={28} color={theColor} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={'rgb(255,255,255)'}
          clearButtonMode="while-editing"
          keyboardAppearance={dark ? 'dark' : 'light'}
          value={term}
          onChangeText={(newTerm) => onTermChange(newTerm)}
          onEndEditing={() => console.log('Finished')}
        />
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'flex-end',
          }}>
          <DrawerIcon navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 7.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    shadowColor: 'dodgerblue',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    backgroundColor: 'rgb(45,45,45)',
    borderColor: 'rgb(45,45,45)',
    borderRadius: 15,
    elevation: 7.5,
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: 'rgb(250,250,250)',
    fontWeight: '400',
    marginLeft: 10,
  },
  iconContainer: {
    width: '15%',
  },
});

export default SearchBar;
