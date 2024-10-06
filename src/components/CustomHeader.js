import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({ navigation, onMenuPress }) => {
  return (
    <View style={styles.header}>
      {/* Left Side: Logo and Title */}
      <View style={styles.leftContainer}>
        <Icon name="menu-book" size={30} color="#FFFFFF" style={styles.logo} />
        <Text style={styles.title}>WingReads7</Text>
      </View>

      {/* Right Side: Cart, Profile, and Menu Icons */}
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.iconButton}>
          <Icon name="shopping-cart" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconButton}>
          <Icon name="person" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Icon name="menu" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#663e22', // Header background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 10,
  },
  title: {
    color: '#FFFFFF', // Title color
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
  },
});

export default CustomHeader;
