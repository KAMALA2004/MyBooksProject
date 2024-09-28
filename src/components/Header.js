import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.menuIconContainer}>
        <Image source={require('../../assets/menu-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>WingReads7</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.chatIcon}>
          <Image source={require('../../assets/chat-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchIcon}>
          <Image source={require('../../assets/search-icon.png')} style={styles.icon} />
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
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
