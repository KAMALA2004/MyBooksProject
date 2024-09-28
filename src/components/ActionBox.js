import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ActionBox = ({ text, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.boxText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 150, 
    height: 120, 
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginRight: 10, 
    marginBottom: 70, 
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ActionBox;
