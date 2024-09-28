import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import moment from 'moment';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;
  const [reviews, setReviews] = useState([
    { id: 1, text: "Great book!", rating: 5 },
    { id: 2, text: "Loved it!", rating: 4 }
  ]);
  const [quantity, setQuantity] = useState(1);

  // Define similarBooks as a local variable or state
  const [similarBooks] = useState([
    { id: 3, name: 'Similar Book 1', price: '$12' },
    { id: 4, name: 'Similar Book 2', price: '$15' }
  ]);

  const scrollViewRef = useRef(null);
  const reviewsSectionRef = useRef(null);

  const scrollToReviews = () => {
    if (reviewsSectionRef.current) {
      scrollViewRef.current.scrollTo({ y: reviewsSectionRef.current.offsetTop, animated: true });
    }
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const getEstimatedDelivery = () => {
    const deliveryDate = moment().add(7, 'days'); // 7 days from now
    return deliveryDate.format('ddd, DD MMM'); // Format as "Fri, 23 Aug"
  };

  const estimatedDeliveryDate = getEstimatedDelivery();

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <View style={styles.bookInfoContainer}>
        <Image style={styles.bookImage} source={{ uri: 'https://via.placeholder.com/120x160' }} />
        <View style={styles.bookDetails}>
          <Text style={styles.bookName}>{book.name}</Text>
          <Text style={styles.bookDescription}>
            This is a brief description of the book. It will include some details about the plot and characters.
          </Text>
          <Text style={styles.bookPrice}>Price: {book.price}</Text>
          <TouchableOpacity onPress={scrollToReviews}>
            <Text style={styles.bookRating}>Rating: 4.5/5</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.detailsBox}>
        <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Estimated Delivery:</Text>
          <Text style={styles.detailValue}>{estimatedDeliveryDate}</Text>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Deliver to:</Text>
          <Text style={styles.detailValue}>{book.accountName}</Text>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Quantity:</Text>
          <View style={styles.quantityContainer}>
            <Button title="-" onPress={handleDecrease} color="#808080" />
            <Text style={styles.quantity}>{quantity}</Text>
            <Button title="+" onPress={handleIncrease} color="#808080" />
          </View>
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Similar Books</Text>
      <ScrollView horizontal contentContainerStyle={styles.similarBooksContainer}>
        {similarBooks.map((similarBook) => (
          <View key={similarBook.id} style={styles.similarBookItem}>
            <Image style={styles.similarBookImage} source={{ uri: 'https://via.placeholder.com/120x160' }} />
            <Text style={styles.similarBookName}>{similarBook.name}</Text>
            <Text style={styles.similarBookPrice}>{similarBook.price}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Customer Reviews</Text>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewItem}>
          <Text style={styles.reviewText}>{review.text}</Text>
          <Text style={styles.reviewRating}>Rating: {review.rating}/5</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.addReviewButton}>
        <Text style={styles.addReviewButtonText}>Add Your Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  bookInfoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  bookImage: {
    width: 120,
    height: 160,
    marginRight: 20,
  },
  bookDetails: {
    flex: 1,
  },
  bookName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  bookDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  bookPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  bookRating: {
    fontSize: 16,
    color: '#333333',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  detailsBox: {
    padding: 10, 
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 17, 
    color: '#333333',
  },
  detailValue: {
    fontSize: 14, 
    color: '#333333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  cartButton: {
    backgroundColor: '#9F7651',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  cartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#693F21',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  similarBooksContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  similarBookItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  similarBookImage: {
    width: 120,
    height: 160,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  similarBookName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  similarBookPrice: {
    fontSize: 14,
    color: '#333333',
  },
  reviewItem: {
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 16,
    color: '#333333',
  },
  reviewRating: {
    fontSize: 14,
    color: '#333333',
  },
  addReviewButton: {
    backgroundColor: '#693F21',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  addReviewButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default BookDetailScreen;
