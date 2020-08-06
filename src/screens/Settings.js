import * as React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextButtonSolidSecondary} from '../components/common/Buttons';

const SettingsScreen = ({navigation, route}) => {
  navigation.setOptions({
    headerTitle: <Text style={styles.titlestyle}>Settings</Text>,
  });

  React.useEffect(() => {
    if (route.params?.user) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.user]);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {colors, dark} = useTheme();
  const buttonTitle = <Text style={styles.buttonstyle}>Next</Text>;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../static/TeaBW.png')}
        style={styles.backgroundimg}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titlestyle}>Welcome {route.params?.user}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{height: 200, justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.inputHeader}>Your Username</Text>
              <View style={styles.inputContainer}>
                <Icon name="user" size={24} color={'rgb(55,135,255)'} />
                <TextInput
                  style={[styles.input, {color: colors.text}]}
                  placeholder="M@_Sheehan"
                  placeholderTextColor={'rgb(125,125,125)'}
                  keyboardAppearance={dark ? 'dark' : 'light'}
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </View>
            </View>
            <View>
              <Text style={styles.inputHeader}>Your Password</Text>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color={'rgb(55,135,255)'} />
                <TextInput
                  style={[styles.input, {color: colors.text}]}
                  placeholder="••••"
                  placeholderTextColor={'rgb(125,125,125)'}
                  keyboardAppearance={dark ? 'dark' : 'light'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>
          <View style={{paddingVertical: 50}}>
            <TextButtonSolidSecondary
              label={buttonTitle}
              onPress={() => {
                navigation.navigate('InfoScreen');
              }}
              icon="arrow-right"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(25,25,25)',
  },
  backgroundimg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 300,
  },
  titleContainer: {
    justifyContent: 'center',
  },
  titlestyle: {
    fontSize: 40,
    color: 'rgb(35, 115, 235)',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    shadowColor: 'dodgerblue',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    paddingTop: 80,
  },
  buttonstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'dodgerblue',
    paddingTop: 5,
    paddingBottom: 10,
  },
  inputHeader: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(45,45,45)',
    shadowColor: 'dodgerblue',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
  footer: {
    flex: 2,
    backgroundColor: 'rgb(25,25,25)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
          backgroundColor: 'rgb(30, 30, 40)',
        },
        headerTintColor: 'rgb(125, 245, 180)',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
