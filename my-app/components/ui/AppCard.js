import React from 'react';
import { View, StyleSheet } from 'react-native';

export const AppCard = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: '#a6a9b15c',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    alignItems: 'center',
  },
});