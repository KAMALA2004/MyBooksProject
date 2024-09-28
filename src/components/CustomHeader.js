import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomHeader = ({ navigation, leftIcon, cartIcon, profileIcon, onMenuPress }) => {
  return (
    <View style={styles.header}>
      {/* Left Side: Logo */}
      <View style={styles.leftContainer}>
        {leftIcon && <Image source={leftIcon} style={styles.logo} />}
        <Text style={styles.title}>WingReads7</Text>
      </View>

      {/* Right Side: Cart, Profile, and Menu Icons */}
      <View style={styles.rightContainer}>
        {cartIcon && (
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.iconButton}>
            <Image source={cartIcon} style={styles.icon} />
          </TouchableOpacity>
        )}
        {profileIcon && (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconButton}>
            <Image source={profileIcon} style={styles.icon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Image source={require('../../assets/menu-icon.png')} style={styles.icon} />
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
    width: 40,
    height: 40,
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
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain', // Ensure image is scaled correctly
  },
});

export default CustomHeader;
