import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BorrowBooksScreen = ({ navigation }) => {
  const [sortOption, setSortOption] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState('');

  // Placeholder for book data
  const books = {
    Romance: [
      { id: 1, name: 'Romantic Book 1', image: 'https://via.placeholder.com/120x160' },
      { id: 2, name: 'Romantic Book 2', image: 'https://via.placeholder.com/120x160' },
    ],
    Thriller: [
      { id: 1, name: 'Thriller Book 1', image: 'https://via.placeholder.com/120x160' },
      { id: 2, name: 'Thriller Book 2', image: 'https://via.placeholder.com/120x160' },
    ],
    Crime: [
      { id: 1, name: 'Crime Book 1', image: 'https://via.placeholder.com/120x160' },
      { id: 2, name: 'Crime Book 2', image: 'https://via.placeholder.com/120x160' },
    ],
    Horror: [
      { id: 1, name: 'Horror Book 1', image: 'https://via.placeholder.com/120x160' },
      { id: 2, name: 'Horror Book 2', image: 'https://via.placeholder.com/120x160' },
    ],
    Comedy: [
      { id: 1, name: 'Comedy Book 1', image: 'https://via.placeholder.com/120x160' },
      { id: 2, name: 'Comedy Book 2', image: 'https://via.placeholder.com/120x160' },
    ]
  };

  const handleBookPress = (book) => {
    navigation.navigate('BookDetail', { book });
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category);
  };

  const showAllBooks = () => {
    setSelectedCategory('');
  };

  const getBooksToDisplay = () => {
    if (selectedCategory === '') {
      return Object.values(books).flat();
    }
    return books[selectedCategory];
  };

  const categoryHeading = selectedCategory ? selectedCategory : 'All Books';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WingReads7</Text>
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={showAllBooks}
          >
            <Text style={styles.categoryText}>All</Text>
          </TouchableOpacity>
          {Object.keys(books).map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryButton}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.sortContainer}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={sortOption}
            style={styles.sortPicker}
            onValueChange={(itemValue) => setSortOption(itemValue)}
          >
            <Picker.Item label="Sort by Name" value="none" />
            <Picker.Item label="A to Z" value="aToZ" />
            <Picker.Item label="Z to A" value="zToA" />
          </Picker>
        </View>
      </View>

      <View style={styles.categoryHeadingContainer}>
        <Text style={styles.categoryHeading}>{categoryHeading}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.booksContainer}>
        {getBooksToDisplay().map((book) => (
          <TouchableOpacity
            key={book.id}
            style={styles.bookItem}
            onPress={() => handleBookPress(book)}
          >
            <Image style={styles.bookImage} source={{ uri: book.image }} />
            <Text style={styles.bookName}>{book.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#693F21',
    paddingVertical: 20,
    width: '110%',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: -19,
    marginRight: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#9F7651',
    borderRadius: 20,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  sortContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sortPicker: {
    height: 40,
    width: 150,
    backgroundColor: '#9F7651',
    color: '#FFFFFF',
    fontSize: 12,
  },
  categoryHeadingContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  booksContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
  },
  bookImage: {
    width: 120,
    height: 160,
    backgroundColor: '#ccc',
    marginBottom: 10,
    borderRadius: 10,
  },
  bookName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default BorrowBooksScreen;
