import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SignUpModal from './modals/SignUpModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextButtonSolidSecondary} from './common/Buttons';

const SignUpButton = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const theTitle = <Text style={styles.titlestyle}>Next</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <TextButtonSolidSecondary
        label={theTitle}
        onPress={toggleModal}
        icon="arrow-right"
      />
      <SignUpModal
        navigation={navigation}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: 'transparent',
  },
  titlestyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'dodgerblue',
    paddingTop: 5,
    paddingBottom: 10,
  },
});

export default SignUpButton;
