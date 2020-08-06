/*
 * Written by Andrew Perera
 * Copyright 2020
 *
 * Dumbed down by Matt Sheehan
 */

import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {Text} from './Text';
import Icon from 'react-native-vector-icons/Feather';
import {useSafeArea} from 'react-native-safe-area-context';

export const TextButtonSolidPrimary = ({
  label,
  icon,
  disabled,
  loading,
  ...props
}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles.btn}
      {...props}
      activeOpacity={0.7}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator size={28} color={colors.primary} />
      ) : (
        <>
          <Text style={{...styles.text, color: 'rgb(250,250,250)'}}>
            {label}
          </Text>
          {icon && (
            <View style={{marginLeft: 5}}>
              <Icon name={icon} color="rgb(250,250,250)" size={28} />
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export const TextButtonSolidSecondary = ({
  label,
  icon,
  loading,
  disabled,
  ...props
}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles.btnTwo}
      {...props}
      activeOpacity={0.7}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={28} color={colors.primary} />
      ) : (
        <>
          <Text style={{...styles.text, color: 'dodgerblue'}}>{label}</Text>
          {icon && (
            <View style={{marginLeft: 5}}>
              <Icon name={icon} color="dodgerblue" size={28} />
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export const FabButton = ({
  style,
  icon,
  color,
  iconColor,
  bottom,
  left,
  right,
  top,
  loading,
  disabled,
  ...props
}) => {
  const {colors} = useTheme();
  const inset = useSafeArea();
  return (
    <TouchableOpacity
      style={[
        style,
        styles.fab,
        {
          backgroundColor: disabled ? '#e2e2e2' : color || colors.primary,
          bottom: bottom && inset.bottom + bottom,
          top: top && inset.top + top,
          left: left && inset.left + left,
          right: right && inset.right + right,
        },
      ]}
      disabled={disabled}
      activeOpacity={0.7}
      {...props}>
      {loading ? (
        <ActivityIndicator size={24} color={colors.white} />
      ) : (
        <Icon
          name={icon}
          color={iconColor || '#ffffff'}
          size={28}
          style={{marginTop: 2.5}}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = {
  btn: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(50,110,190)',
    borderColor: 'rgb(50,110,190)',
    borderWidth: 4,
  },
  btnTwo: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'dodgerblue',
    borderWidth: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
};
