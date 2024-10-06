import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'https://wbmfacuvniaezdwpdkzl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndibWZhY3V2bmlhZXpkd3Bka3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxOTU5MzcsImV4cCI6MjA0Mzc3MTkzN30.tIGW-a7UgW55BwhZf1xTeJ7OvD6B_kBKD7Y9rASMjmk'; // Your actual Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

const SellBooksScreen = () => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [bookName, setBookName] = useState('');

  const submitForm = async () => {
    if (!bookName.trim() || !pickupAddress.trim() || !landmark.trim()) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      // Insert the book listing in Supabase
      const { data, error } = await supabase
        .from('book_listings')
        .insert([{ 
          book_name: bookName, 
          pickup_address: pickupAddress, 
          landmark: landmark,
        }]);

      if (error) {
        throw new Error(error.message || 'Failed to create book listing.');
      }

      Alert.alert('Success', 'Your book has been listed for sale!');
      setPickupAddress('');
      setLandmark('');
      setBookName('');

    } catch (error) {
      console.warn('Caught error:', error); // Log caught error for debugging
      Alert.alert('Error', error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WingReads7</Text>
        <Text style={styles.catchphrase}>Sell your books to us now!</Text>
      </View>

      <Text style={styles.label}>Pick Up Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter pick up address"
        value={pickupAddress}
        onChangeText={setPickupAddress}
      />

      <Text style={styles.label}>Landmark</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter landmark"
        value={landmark}
        onChangeText={setLandmark}
      />

      <Text style={styles.label}>Book Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter book name"
        value={bookName}
        onChangeText={setBookName}
      />

      <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#693F21',
    paddingVertical: 20,
    height: 120,
    top: -20,
    width: '111%',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: -20,
    marginRight: 40,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#663e22',
    backgroundColor: "white",
  },
  catchphrase: {
    fontSize: 16,
    top: 10,
    color: '#FFFFFF',
    marginTop: 5,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#663e22',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#9F7651',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#9F7651',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SellBooksScreen;
