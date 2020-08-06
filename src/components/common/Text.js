import React from 'react';
import {Text as RNText} from 'react-native';
import {useTheme} from '@react-navigation/native';

/*
We need to use the custom text component here because
it makes it a lot easier to use custom fonts especially cross-platform
*/

export const Text = ({style, ...props}) => {
  const {colors} = useTheme();
  return (
    <RNText
      style={[styles.text, {color: colors.bodyText}].concat(style)}
      {...props}>
      {props.children}
    </RNText>
  );
};

export const HeaderXL = ({style, color, ...props}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[style, styles.headerXL, {color: color || colors.text}]}
      {...props}>
      {props.children}
    </Text>
  );
};

export const HeaderLarge = ({style, color, ...props}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[style, styles.headerLarge, {color: color || colors.text}]}
      {...props}>
      {props.children}
    </Text>
  );
};

export const HeaderMedium = ({style, color, ...props}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[style, styles.headerMedium, {color: color || colors.text}]}
      {...props}>
      {props.children}
    </Text>
  );
};

export const HeaderSmall = ({style, color, marginBottom, ...props}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[
        style,
        styles.headerSmall,
        {color: color || colors.text, marginBottom: marginBottom && 10},
      ]}
      {...props}>
      {props.children}
    </Text>
  );
};

const styles = {
  headerXL: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 15,
  },
  headerLarge: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
  },
  headerMedium: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  headerSmall: {
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
};
