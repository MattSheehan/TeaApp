import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TextButtonSolidPrimary,
  TextButtonSolidSecondary,
} from '../components/common/Buttons';
import RememberLOGIN from '../components/RememberLOGIN';

const LoginScreen = ({navigation, route}) => {
  // Email and Password states
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {colors, dark} = useTheme();
  const theColor = 'rgb(250,250,250)';

  // Remember login information states
  const [isConsented, setConsented] = useState(false);
  const toggleConsented = () => {
    setConsented(!isConsented);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titlestyle}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.titlestyle}>Email</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={24} color={theColor} />
          <TextInput
            style={[styles.input, {color: colors.text}]}
            placeholder="Username"
            value={username}
            textContentType="username"
            placeholderTextColor={theColor}
            keyboardAppearance={dark ? 'dark' : 'light'}
            onChangeText={(newUsername) => setUsername(newUsername)}
            autoCapitalize="none"
          />
        </View>

        <View style={{padding: 20}} />
        <Text style={styles.titlestyle}>Password</Text>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color={theColor} />
          <TextInput
            style={[styles.input, {color: colors.text}]}
            placeholder="Password"
            value={password}
            textContentType="password"
            placeholderTextColor={theColor}
            keyboardAppearance={dark ? 'dark' : 'light'}
            onChangeText={(newPassword) => setPassword(newPassword)}
            secureTextEntry={true}
          />
        </View>

        <RememberLOGIN
          isConsented={isConsented}
          toggleConsented={toggleConsented}
          consentQuestion="Remember Login Information?"
        />

        <View style={styles.actionsContainer}>
          <TextButtonSolidPrimary
            label="Login"
            onPress={() => {
              navigation.navigate('InfoScreen', {
                user: username,
                password: password,
              });
            }}
            icon="log-in"
          />
          <View style={{padding: 15}} />
          <TextButtonSolidSecondary
            label="Sign Up"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            icon="arrow-right"
          />
          <TouchableOpacity
            style={styles.passwordAction}
            onPress={() => navigation.navigate('InfoScreen')}>
            <Text style={styles.passwordText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    backgroundColor: 'dodgerblue',
  },
  titlestyle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    color: 'rgb(255,255,255)',
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
  actionsContainer: {
    marginVertical: 5,
  },
  passwordAction: {
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  passwordText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgb(205,205,205)',
  },
  fixThis: {
    backgroundColor: 'rgb(205,205,205)',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 2,
    backgroundColor: 'rgb(30,30,30)',
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
          backgroundColor: 'transparent',
        },
        headerTintColor: 'tansparent',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
