import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FiltersModal from './modals/FiltersModal';

const DrawerIcon = ({navigation}) => {
  const [isPressed, setPressed] = useState(false);
  const color = 'dodgerblue';
  const togglePressed = () => {
    setPressed(!isPressed);
  };

  const submitModal = () => {
    togglePressed();
  };

  return (
    <View style={{height: 40, width: 40}}>
      <TouchableOpacity onPress={togglePressed}>
        <Icon name="sliders" size={34} color={color} />
        <FiltersModal
          navigation={navigation}
          isPressed={isPressed}
          togglePressed={togglePressed}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DrawerIcon;
// props = {navigation, ...}
