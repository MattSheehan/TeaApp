import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {TextButtonSolidSecondary} from '../../components/common/Buttons';

const SignUpModal = ({navigation, isModalVisible, toggleModal}) => {
  const [username, setUsername] = useState('');
  const {colors, dark} = useTheme();
  const theColor = 'rgb(250,250,250)';

  const submitModal = () => {
    toggleModal();
    navigation.navigate('InfoScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.7}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View
          style={{
            paddingTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'rgb(25, 25, 25)',
              width: 350,
              height: 400,
            }}>
            <View style={{alignSelf: 'center', padding: 15}}>
              <Text style={styles.titlestyle}>
                A passkey was sent to your email.
              </Text>
            </View>
            <View style={{paddingTop: 20, paddingBottom: 20}} />
            <View style={styles.inputContainer}>
              <Icon name="user" size={24} color={theColor} />
              <TextInput
                style={[styles.input, {color: colors.text}]}
                placeholder="4-digit passkey"
                value={username}
                textContentType="username"
                placeholderTextColor={theColor}
                keyboardAppearance={dark ? 'dark' : 'light'}
                onChangeText={(newUsername) => setUsername(newUsername)}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.fixThis}>
              <TextButtonSolidSecondary
                label="Create Account"
                onPress={submitModal}
                icon="arrow-right"
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  titlestyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(255,255,255)',
    paddingTop: 5,
    paddingBottom: 10,
  },
  fixThis: {
    backgroundColor: 'transparent',
    width: 300,
    paddingTop: 150,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderWidth: 2,
    backgroundColor: 'rgb(45,45,45)',
    borderColor: 'rgb(45,45,45)',
    borderRadius: 10,
    elevation: 7.5,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
  },
});

export default SignUpModal;
