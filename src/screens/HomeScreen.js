// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import ActionBox from '../components/ActionBox';
import CustomHeader from '../components/CustomHeader';

const HomeScreen = ({ navigation }) => {
  // Dummy data for books
  const initialBooks = [
    { id: '1', title: 'Book 1', price: '$10.99', image: require('../../assets/buy-icon.png') },
    { id: '2', title: 'Book 2', price: '$12.50', image: require('../../assets/buy-icon.png') },
    { id: '3', title: 'Book 3', price: '$15.00', image: require('../../assets/buy-icon.png') },
    { id: '4', title: 'Book 4', price: '$8.99', image: require('../../assets/buy-icon.png') },
    { id: '5', title: 'Book 5', price: '$11.99', image: require('../../assets/buy-icon.png') },
    { id: '6', title: 'Book 6', price: '$14.50', image: require('../../assets/buy-icon.png') },
    { id: '7', title: 'Book 7', price: '$25.00', image: require('../../assets/buy-icon.png') },
    { id: '8', title: 'Book 8', price: '$18.99', image: require('../../assets/buy-icon.png') },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setBooks(initialBooks);
    } else {
      setBooks(
        initialBooks.filter((book) =>
          book.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={navigation}
        leftIcon={require('../../assets/logo.png')} // Logo on the left
        cartIcon={require('../../assets/cart-icon.png')} // Cart icon
        profileIcon={require('../../assets/profile-icon.png')} // Profile icon
      />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search books..."
          placeholderTextColor="#9F7651"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      {/* Horizontal Scrollable Options */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.actionBoxContainer}>
          <ActionBox
            text="Buy Books"
            icon={require('../../assets/buy-icon.png')}
            onPress={() => navigation.navigate('BuyBooks')}
          />
          <ActionBox
            text="Lend Books"
            icon={require('../../assets/rent-icon.png')}
            onPress={() => navigation.navigate('LendBooks')}
          />
          <ActionBox
            text="Borrow Books"
            icon={require('../../assets/borrow-icon.png')}
            onPress={() => navigation.navigate('BorrowBooks')}
          />
          <ActionBox
            text="Sell Books"
            icon={require('../../assets/sell-icon.png')}
            onPress={() => {
              console.log('Navigating to SellBooksScreen');
              navigation.navigate('SellBooks');
            }}
          />
        </View>
      </ScrollView>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.bookBox}>
            <Image source={item.image} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookCost}>{item.price}</Text>
          </View>
        )}
        contentContainerStyle={styles.bookGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    height: 40,
    borderColor: '#9F7651',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    color: '#9F7651',
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  actionBoxContainer: {
    flexDirection: 'row',
  },
  bookGrid: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  bookBox: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bookCost: {
    fontSize: 14,
    color: '#663e22',
    marginTop: 5,
  },
});

export default HomeScreen;
