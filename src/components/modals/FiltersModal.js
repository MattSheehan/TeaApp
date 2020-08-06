import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import {TextButtonSolidSecondary} from '../../components/common/Buttons';

const FiltersModal = ({navigation, isPressed, togglePressed}) => {
  let color = 'rgb(101, 250, 101)';
  let uncheckedColor = 'rgb(25,25,25)';
  const {colors, dark} = useTheme();

  const submitModal = () => {
    togglePressed();
    navigation.navigate('InfoScreen');
  };

  const [checkedLeast, setCheckedLeast] = useState(false);
  const toggleLeast = () => {
    setCheckedLeast(!checkedLeast);
  };

  const [checkedMiddle, setCheckedMiddle] = useState(false);
  const toggleMiddle = () => {
    setCheckedMiddle(!checkedMiddle);
  };

  const [checkedMost, setCheckedMost] = useState(false);
  const toggleMost = () => {
    setCheckedMost(!checkedMost);
  };

  const [checkedBest, setCheckedBest] = useState(false);
  const toggleBest = () => {
    setCheckedBest(!checkedBest);
  };

  const [checkedTastiest, setCheckedTastiest] = useState(false);
  const toggleTastiest = () => {
    setCheckedTastiest(!checkedTastiest);
  };

  const [checkedClosest, setCheckedClosest] = useState(false);
  const toggleClosest = () => {
    setCheckedClosest(!checkedClosest);
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isPressed}
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
            <View style={{padding: 5}} />
            <Text style={styles.headerStyle}>Pricing</Text>
            <View style={styles.generalcontainer}>
              <CheckBox
                center
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgb(255,255,255)',
                }}
                title="$"
                checkedColor={color}
                checked={checkedLeast}
                onPress={toggleLeast}
              />
              <CheckBox
                center
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgb(255,255,255)',
                }}
                title="$$"
                checkedColor={color}
                checked={checkedMiddle}
                onPress={toggleMiddle}
              />
              <CheckBox
                center
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgb(255,255,255)',
                }}
                title="$$$"
                checkedColor={color}
                checked={checkedMost}
                onPress={toggleMost}
              />
            </View>
            <View style={{padding: 5}} />
            <Text style={styles.headerStyle}>Reviews</Text>
            <View style={styles.generalcontainer}>
              <CheckBox
                center
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgb(255,255,255)',
                }}
                title="4 Stars & Up"
                checkedColor={color}
                checked={checkedBest}
                onPress={toggleBest}
              />
              <CheckBox
                center
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgb(255,255,255)',
                }}
                title="Best Menu"
                checkedColor={color}
                checked={checkedClosest}
                onPress={toggleClosest}
              />
            </View>
            <View style={{padding: 5}} />
            <Text style={styles.headerStyle}>Location</Text>
            <View style={styles.generalcontainer}>
              <CheckBox
                center
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgb(255,255,255)',
                }}
                title="Closest"
                checkedColor={color}
                checked={checkedTastiest}
                onPress={toggleTastiest}
              />
            </View>
            <View style={styles.fixedIt}>
              <TextButtonSolidSecondary
                label="Continue"
                onPress={submitModal}
                icon="arrow-right"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  fixedIt: {
    backgroundColor: 'transparent',
    width: 300,
    paddingTop: 50,
    alignSelf: 'center',
  },
  generalcontainer: {
    flexDirection: 'row',
  },
  headerStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 15,
    color: 'rgb(255,255,255)',
  },
});

export default FiltersModal;
