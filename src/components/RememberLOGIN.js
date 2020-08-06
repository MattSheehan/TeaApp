import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const RememberLOGIN = ({toggleConsented, consentQuestion}) => {
  let color = 'rgb(101, 250, 101)';
  const [checkedYes, setCheckedYes] = useState(false);
  const toggleYes = () => {
    toggleConsented();
    setCheckedYes(!checkedYes);
  };
  return (
    <SafeAreaView style={styles.container}>
      <CheckBox
        center
        containerStyle={{backgroundColor: 'transparent'}}
        title={null}
        iconLeft
        checkedColor={color}
        checked={checkedYes}
        onPress={toggleYes}
        size={34}
      />
      <Text style={{color: 'rgb(250,250,250)', fontWeight: 'bold'}}>
        {consentQuestion}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 295,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RememberLOGIN;
