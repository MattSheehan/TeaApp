import {DefaultTheme, DarkTheme as RNDarkTheme} from '@react-navigation/native';

const defaultColors = {
  primary: '#73000a',
  blue: '#466A9F',
  red: '#CC2E40',
  yellow: '#FFF89E',
  green: '#1F414D',
  grey: '#777777',
  lightGrey: '#999999',
  darkGrey: '#555555',
  error: '#D73F3F',
  success: '#03BD4D',
};

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...defaultColors,
    secondary: '#d3d3d3',
    disabledSecondary: '#e7e7e7',
    background: '#ffffff',
    border: '#d3d3d3',
    highlight: '#f2f2f2',
    card: '#ffffff',
    navButton: '#73000a',
    altBackground: '#f7f7f7',
    disabledText: '#999999',
    bodyText: '#888888',
  },
};

export const DarkTheme = {
  ...RNDarkTheme,
  colors: {
    ...RNDarkTheme.colors,
    ...defaultColors,
    secondary: '#555555',
    disabledSecondary: '#666666',
    background: '#0D0D0D',
    card: '#0D0D0D',
    border: '#333333',
    highlight: '#222222',
    navButton: '#ffffff',
    altBackground: '#181818',
    disabledText: '#a2a2a2',
    text: '#ffffff',
    bodyText: '#c5c5c5',
  },
};
