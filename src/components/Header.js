import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuIconContainer}>
        <Icon name="menu" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      
      {/* Title */}
      <Text style={styles.headerTitle}>WingReads7</Text>
      
      {/* Right Side Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.chatIcon}>
          <Icon name="chat" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#693F21',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    padding: 5,
  },
  chatIcon: {
    marginRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default Header;
